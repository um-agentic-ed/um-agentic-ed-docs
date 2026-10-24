// Generated from widget block instructions
(function () {
  "use strict";

  const widgetKey = "creating-apps/getting-started/static-serverless/add-server-support/get-my-weather";

  window.umedAppWidgets[widgetKey] = {
    init(container) {
      const controls = document.createElement("div");
      controls.className = "widget-controls";

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Get my weather";
      button.style.marginTop = "12px";
      button.style.padding = "0 0.75rem";

      const timeSpan = document.createElement("fieldset");
      timeSpan.className = "widget-control";
      const legend = document.createElement("legend");
      legend.textContent = "Time span";
      const radioName = `weather-span-${Math.random().toString(36).slice(2)}`;

      const makeOption = (value, labelText, checked) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = radioName;
        radio.value = value;
        radio.checked = checked;
        label.append(radio, document.createTextNode(` ${labelText}`));
        return { label, radio };
      };

      const today = makeOption("today", "Today", true);
      const week = makeOption("week", "This week", false);
      timeSpan.append(legend, today.label, week.label);
      controls.append(button, timeSpan);

      const heading = document.createElement("h3");
      heading.textContent = "Weather forecast";
      const status = document.createElement("p");
      status.textContent = "Choose a time span, then get your local forecast.";
      const canvas = document.createElement("canvas");
      canvas.hidden = true;
      container.append(controls, heading, status, canvas);

      let chart = null;
      let controller = null;
      let destroyed = false;
      let cachedLocation = null;

      const clearChart = () => {
        if (chart) {
          chart.destroy();
          chart = null;
        }
        canvas.hidden = true;
      };

      const getJson = async (url, signal) => {
        const response = await fetch(url, {
          signal,
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error(`The weather service returned status ${response.status}.`);
        return response.json();
      };

      const renderForecast = (forecast, span) => {
        const isToday = span === "today";
        const source = isToday ? forecast.hourly : forecast.daily;
        if (!source || !Array.isArray(source.time)) {
          throw new Error("The weather service returned an incomplete forecast.");
        }
        const labels = source.time.map((value) => {
          const date = new Date(value);
          return new Intl.DateTimeFormat(undefined, isToday
            ? { hour: "numeric" }
            : { weekday: "short", month: "short", day: "numeric" }).format(date);
        });
        const temperatures = isToday ? source.temperature_2m : source.temperature_2m_max;
        const precipitation = isToday
          ? source.precipitation_probability
          : (source.precipitation_probability_max || source.precipitation_sum);

        clearChart();
        canvas.hidden = false;
        chart = new Chart(canvas, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: isToday ? "Temperature" : "High temperature",
                data: temperatures,
                borderColor: "#9b3a3a",
                backgroundColor: "#9b3a3a",
                yAxisID: "temperature",
                tension: 0.25
              },
              {
                label: "Precipitation likelihood",
                data: precipitation,
                borderColor: "#356b9a",
                backgroundColor: "#356b9a",
                yAxisID: "precipitation",
                tension: 0.25
              }
            ]
          },
          options: {
            responsive: true,
            interaction: { mode: "index", intersect: false },
            scales: {
              temperature: {
                type: "linear",
                position: "left",
                title: { display: true, text: "Temperature (°F)" }
              },
              precipitation: {
                type: "linear",
                position: "right",
                min: 0,
                max: 100,
                grid: { drawOnChartArea: false },
                title: { display: true, text: "Precipitation likelihood (%)" }
              }
            }
          }
        });
      };

      const fetchAndRender = async () => {
        if (controller) controller.abort();
        controller = new AbortController();
        const { signal } = controller;
        button.disabled = true;
        clearChart();
        status.textContent = "Loading the forecast…";

        try {
          if (!cachedLocation) {
            status.textContent = "Finding your location and loading the forecast…";
            const location = await getJson("https://ipwho.is/", signal);
            if (location.success === false || !Number.isFinite(location.latitude) || !Number.isFinite(location.longitude)) {
              throw new Error(location.message || "Your approximate location could not be determined.");
            }
            cachedLocation = location;
          }

          const span = week.radio.checked ? "week" : "today";
          const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
          weatherUrl.searchParams.set("latitude", cachedLocation.latitude);
          weatherUrl.searchParams.set("longitude", cachedLocation.longitude);
          weatherUrl.searchParams.set("timezone", "auto");
          weatherUrl.searchParams.set("temperature_unit", "fahrenheit");
          weatherUrl.searchParams.set("forecast_days", span === "today" ? "1" : "7");
          if (span === "today") {
            weatherUrl.searchParams.set("hourly", "temperature_2m,precipitation_probability");
          } else {
            weatherUrl.searchParams.set("daily", "temperature_2m_max,precipitation_probability_max");
          }

          const forecast = await getJson(weatherUrl, signal);
          if (destroyed) return;
          const place = [cachedLocation.city, cachedLocation.region, cachedLocation.country].filter(Boolean).join(", ");
          heading.textContent = `Weather forecast near ${place || "your location"}`;
          status.textContent = span === "today" ? "Hourly forecast for today" : "Daily forecast for the next 7 days";
          renderForecast(forecast, span);
        } catch (error) {
          if (destroyed || error.name === "AbortError") return;
          status.textContent = error instanceof Error ? error.message : "The forecast could not be loaded.";
        } finally {
          if (!destroyed && controller?.signal === signal) {
            button.disabled = false;
            controller = null;
          }
        }
      };

      const handleClick = async () => {
        const confirmed = await window.umedComponents.confirm(
          "To get your local forecast, this widget will share your IP address with ipwho.is and the resulting latitude and longitude with Open-Meteo.",
          { confirmLabel: "OK", cancelLabel: "Cancel" }
        );
        if (!confirmed || destroyed) return;
        await fetchAndRender();
      };

      const handleSpanChange = () => {
        if (cachedLocation) {
          fetchAndRender();
        }
      };

      button.addEventListener("click", handleClick);
      timeSpan.addEventListener("change", handleSpanChange);

      return () => {
        destroyed = true;
        button.removeEventListener("click", handleClick);
        timeSpan.removeEventListener("change", handleSpanChange);
        if (controller) controller.abort();
        clearChart();
      };
    }
  };
})();
