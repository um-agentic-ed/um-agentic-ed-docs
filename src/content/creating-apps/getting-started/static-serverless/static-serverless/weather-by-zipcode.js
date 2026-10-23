// Generated from widget block instructions last updated: 2026-10-23T13:04:59.545Z
(function () {
  "use strict";

  const widgetKey = "creating-apps/getting-started/static-serverless/static-serverless/weather-by-zipcode";

  window.umedAppWidgets[widgetKey] = {
    init(container) {
      const controls = document.createElement("div");
      controls.className = "widget-controls";

      const zipLabel = document.createElement("label");
      zipLabel.className = "widget-control";
      zipLabel.append(document.createTextNode("Enter a US zip code "));

      const zipInput = document.createElement("input");
      zipInput.type = "text";
      zipInput.inputMode = "numeric";
      zipInput.autocomplete = "postal-code";
      zipInput.maxLength = 5;
      zipInput.pattern = "[0-9]{5}";
      zipInput.value = "48109";
      zipInput.setAttribute("aria-describedby", "weather-location-feedback");
      zipLabel.append(zipInput);

      const submitButton = document.createElement("button");
      submitButton.type = "button";
      submitButton.textContent = "Get forecast";

      const locationFeedback = document.createElement("span");
      locationFeedback.id = "weather-location-feedback";
      locationFeedback.setAttribute("aria-live", "polite");
      controls.append(zipLabel, submitButton, locationFeedback);

      const status = document.createElement("p");
      status.setAttribute("aria-live", "polite");
      status.textContent = "Select Get forecast to view the seven-day forecast for 48109.";

      const chartWrapper = document.createElement("div");
      chartWrapper.style.position = "relative";
      chartWrapper.style.minHeight = "320px";
      const canvas = document.createElement("canvas");
      chartWrapper.append(canvas);
      container.append(controls, status, chartWrapper);

      let chart = null;
      let requestController = null;
      let requestSequence = 0;
      let destroyed = false;

      const clearChart = () => {
        if (chart) {
          chart.destroy();
          chart = null;
        }
      };

      const cancelRequest = () => {
        requestSequence += 1;
        if (requestController) {
          requestController.abort();
          requestController = null;
        }
      };

      const requestJson = async (url, signal, notFoundMessage) => {
        const response = await fetch(url, {
          signal,
          headers: { Accept: "application/json" }
        });
        if (!response.ok) {
          if (response.status === 404) throw new Error(notFoundMessage);
          throw new Error(`The weather service returned an error (${response.status}).`);
        }
        return response.json();
      };

      const loadForecast = async (zipCode) => {
        cancelRequest();
        clearChart();
        submitButton.disabled = true;
        locationFeedback.textContent = "Looking up location…";
        status.textContent = "Loading forecast…";

        requestController = new AbortController();
        const signal = requestController.signal;
        const sequence = requestSequence;

        try {
          const location = await requestJson(
            `https://api.zippopotam.us/us/${encodeURIComponent(zipCode)}`,
            signal,
            "No US location was found for that ZIP code."
          );
          if (destroyed || sequence !== requestSequence) return;

          const place = Array.isArray(location.places) ? location.places[0] : null;
          const latitude = Number(place && place.latitude);
          const longitude = Number(place && place.longitude);
          if (!place || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
            throw new Error("The location service returned incomplete coordinates.");
          }

          const city = String(place["place name"] || "Unknown city");
          const state = String(place["state abbreviation"] || place.state || "");
          const locationName = `${city}${state ? `, ${state}` : ""}`;
          locationFeedback.textContent = locationName;

          const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
          forecastUrl.search = new URLSearchParams({
            latitude: String(latitude),
            longitude: String(longitude),
            daily: "temperature_2m_max,precipitation_probability_max",
            temperature_unit: "fahrenheit",
            timezone: "auto",
            forecast_days: "7"
          }).toString();
          const forecast = await requestJson(
            forecastUrl,
            signal,
            "No forecast was found for that location."
          );
          if (destroyed || sequence !== requestSequence) return;

          const daily = forecast.daily || {};
          const dates = Array.isArray(daily.time) ? daily.time : [];
          const temperatures = Array.isArray(daily.temperature_2m_max) ? daily.temperature_2m_max : [];
          const precipitation = Array.isArray(daily.precipitation_probability_max)
            ? daily.precipitation_probability_max
            : [];
          if (dates.length === 0 || temperatures.length !== dates.length || precipitation.length !== dates.length) {
            throw new Error("The weather service returned incomplete forecast data.");
          }

          chart = new Chart(canvas, {
            type: "line",
            data: {
              labels: dates.map((date) => new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric"
              })),
              datasets: [
                {
                  label: "High temperature (°F)",
                  data: temperatures,
                  borderColor: "#a33a3a",
                  backgroundColor: "rgba(163, 58, 58, 0.12)",
                  yAxisID: "temperature",
                  tension: 0.25
                },
                {
                  label: "Precipitation likelihood (%)",
                  data: precipitation,
                  borderColor: "#326a91",
                  backgroundColor: "rgba(50, 106, 145, 0.12)",
                  yAxisID: "precipitation",
                  tension: 0.25
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: "index", intersect: false },
              scales: {
                temperature: {
                  type: "linear",
                  position: "left",
                  title: { display: true, text: "High temperature (°F)" }
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
          status.textContent = `Seven-day forecast for ${locationName}.`;
        } catch (error) {
          if (destroyed || signal.aborted || sequence !== requestSequence) return;
          clearChart();
          locationFeedback.textContent = "Location unavailable";
          status.textContent = error instanceof Error ? error.message : "The forecast could not be loaded.";
        } finally {
          if (sequence === requestSequence) {
            requestController = null;
            submitButton.disabled = false;
          }
        }
      };

      const requestForecast = () => {
        const zipCode = zipInput.value.replace(/\D/g, "").slice(0, 5);
        zipInput.value = zipCode;
        if (zipCode.length !== 5) {
          cancelRequest();
          clearChart();
          locationFeedback.textContent = "";
          status.textContent = "Enter a five-digit ZIP code.";
          return;
        }

        const approved = window.confirm(
          "To load this forecast, the entered ZIP code will be sent to Zippopotamus and its coordinates will be sent to Open-Meteo. These services also receive ordinary connection metadata such as your IP address. Continue?"
        );
        if (!approved) {
          status.textContent = "Forecast lookup canceled; no location request was made.";
          return;
        }
        loadForecast(zipCode);
      };

      const handleInput = () => {
        const digits = zipInput.value.replace(/\D/g, "").slice(0, 5);
        if (zipInput.value !== digits) zipInput.value = digits;
        cancelRequest();
        clearChart();
        submitButton.disabled = false;
        locationFeedback.textContent = "";
        status.textContent = digits.length === 5
          ? "Select Get forecast to load this location."
          : "Enter a five-digit ZIP code.";
      };
      const handleKeydown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          requestForecast();
        }
      };

      zipInput.addEventListener("input", handleInput);
      zipInput.addEventListener("keydown", handleKeydown);
      submitButton.addEventListener("click", requestForecast);

      return () => {
        destroyed = true;
        zipInput.removeEventListener("input", handleInput);
        zipInput.removeEventListener("keydown", handleKeydown);
        submitButton.removeEventListener("click", requestForecast);
        cancelRequest();
        clearChart();
      };
    }
  };
})();
