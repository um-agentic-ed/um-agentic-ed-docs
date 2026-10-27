// Generated from widget block instructions last updated: 2026-10-26T14:51:35.711Z
(function () {
  "use strict";

  const widgetKey = "creating-apps/content-generation/ai-generated-content/widget-blocks/xy-plotter";

  function tokenize(expression) {
    const tokens = [];
    let index = 0;

    while (index < expression.length) {
      const character = expression[index];
      if (/\s/.test(character)) {
        index += 1;
        continue;
      }
      if (/[0-9.]/.test(character)) {
        const match = expression.slice(index).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i);
        if (!match) throw new Error("Enter a valid number.");
        tokens.push({ type: "number", value: Number(match[0]) });
        index += match[0].length;
        continue;
      }
      if (/[a-z]/i.test(character)) {
        const match = expression.slice(index).match(/^[a-z]+/i);
        const name = match[0].toLowerCase();
        if (!["x", "log", "ln"].includes(name)) {
          throw new Error(`Unsupported term: ${match[0]}`);
        }
        tokens.push({ type: "name", value: name });
        index += match[0].length;
        continue;
      }
      if ("+-*/^()".includes(character)) {
        tokens.push({ type: character, value: character });
        index += 1;
        continue;
      }
      throw new Error(`Unsupported symbol: ${character}`);
    }

    return tokens;
  }

  function compileExpression(expression) {
    const tokens = tokenize(expression);
    let position = 0;
    const peek = () => tokens[position];
    const take = (type) => {
      if (peek() && peek().type === type) return tokens[position++];
      return null;
    };
    const startsPrimary = (token) => token && ["number", "name", "("].includes(token.type);

    function parsePrimary() {
      const number = take("number");
      if (number) return () => number.value;

      const name = take("name");
      if (name) {
        if (name.value === "x") return x => x;
        take("(");
        const argument = parseAddSubtract();
        if (!take(")")) throw new Error(`${name.value} needs a closing parenthesis.`);
        return name.value === "ln"
          ? x => Math.log(argument(x))
          : x => Math.log10(argument(x));
      }

      if (take("(")) {
        const value = parseAddSubtract();
        if (!take(")")) throw new Error("Add a closing parenthesis.");
        return value;
      }
      throw new Error("Enter a function of x.");
    }

    function parseUnary() {
      if (take("+")) return parseUnary();
      if (take("-")) {
        const value = parseUnary();
        return x => -value(x);
      }
      return parsePrimary();
    }

    function parsePower() {
      const base = parseUnary();
      if (!take("^")) return base;
      const exponent = parsePower();
      return x => Math.pow(base(x), exponent(x));
    }

    function parseMultiplyDivide() {
      let left = parsePower();
      while (true) {
        const operator = take("*") || take("/");
        const implicit = !operator && startsPrimary(peek());
        if (!operator && !implicit) break;
        const right = parsePower();
        const previous = left;
        left = operator && operator.type === "/"
          ? x => previous(x) / right(x)
          : x => previous(x) * right(x);
      }
      return left;
    }

    function parseAddSubtract() {
      let left = parseMultiplyDivide();
      while (true) {
        const operator = take("+") || take("-");
        if (!operator) break;
        const right = parseMultiplyDivide();
        const previous = left;
        left = operator.type === "+"
          ? x => previous(x) + right(x)
          : x => previous(x) - right(x);
      }
      return left;
    }

    if (!tokens.length) throw new Error("Enter a function of x.");
    const evaluate = parseAddSubtract();
    if (position !== tokens.length) throw new Error("Check the function syntax.");
    return evaluate;
  }

  window.umedAppWidgets = window.umedAppWidgets || {};
  window.umedAppWidgets[widgetKey] = {
    init(container) {
      const controls = document.createElement("div");
      controls.className = "widget-controls";
      controls.style.justifyContent = "flex-start";
      controls.style.columnGap = "0.75rem";
      controls.style.rowGap = "0.4rem";
      controls.style.width = "fit-content";
      controls.style.maxWidth = "100%";

      const makeInput = (labelText, type, value) => {
        const label = document.createElement("label");
        label.className = "widget-control";
        label.append(document.createTextNode(labelText));
        const input = document.createElement("input");
        input.type = type;
        input.value = value;
        label.append(input);
        controls.append(label);
        return input;
      };

      const expressionInput = makeInput("y = ", "text", "2x + 3");
      expressionInput.placeholder = "e.g., 2x + 3";
      expressionInput.setAttribute("aria-label", "Function of x");
      expressionInput.style.width = "11rem";
      const minInput = makeInput("Min X ", "number", "-10");
      const maxInput = makeInput("Max X ", "number", "10");
      minInput.step = "any";
      maxInput.step = "any";
      minInput.style.width = "5rem";
      maxInput.style.width = "5rem";

      const message = document.createElement("p");
      message.setAttribute("role", "status");
      message.style.minHeight = "1.5em";
      message.style.margin = "0.25rem 0";

      const canvas = document.createElement("canvas");
      container.append(controls, message, canvas);

      const chart = new Chart(canvas, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "y = 2x + 3",
              data: [],
              showLine: true,
              borderColor: "#2f65a7",
              backgroundColor: "#2f65a7",
              borderWidth: 2,
              pointRadius: 2,
              pointHoverRadius: 5,
              order: 0
            },
            {
              label: "x origin",
              data: [],
              showLine: true,
              borderColor: "#000000",
              borderWidth: 1,
              pointRadius: 0,
              order: 10
            },
            {
              label: "y origin",
              data: [],
              showLine: true,
              borderColor: "#000000",
              borderWidth: 1,
              pointRadius: 0,
              order: 10
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          parsing: false,
          animation: false,
          scales: {
            x: { type: "linear", title: { display: true, text: "x" } },
            y: { title: { display: true, text: "y" } }
          },
          plugins: {
            legend: {
              display: true,
              labels: { filter: item => item.datasetIndex === 0 }
            }
          }
        }
      });

      function redraw() {
        try {
          const min = Number(minInput.value);
          const max = Number(maxInput.value);
          if (!Number.isFinite(min) || !Number.isFinite(max) || min >= max) {
            throw new Error("Min X must be less than Max X.");
          }
          const evaluate = compileExpression(expressionInput.value);
          const points = Array.from({ length: 100 }, (_, index) => {
            const x = min + ((max - min) * index / 99);
            const y = evaluate(x);
            return { x, y: Number.isFinite(y) ? y : null };
          });
          if (!points.some(point => point.y !== null)) {
            throw new Error("The function has no finite values in this range.");
          }
          const finiteYValues = points.filter(point => point.y !== null).map(point => point.y);
          const rawYMin = Math.min(0, ...finiteYValues);
          const rawYMax = Math.max(0, ...finiteYValues);

          // Use zero padding unless all Y values are identical
          const computedYMin = rawYMin === rawYMax ? rawYMin - 1 : rawYMin;
          const computedYMax = rawYMin === rawYMax ? rawYMax + 1 : rawYMax;

          message.textContent = "";
          chart.data.datasets[0].label = `y = ${expressionInput.value.trim()}`;
          chart.data.datasets[0].data = points;

          // Horizontal origin line (y = 0) spanning full X range
          chart.data.datasets[1].data = [{ x: min, y: 0 }, { x: max, y: 0 }];

          // Vertical origin line (x = 0) spanning exact Y bounds
          chart.data.datasets[2].data = [
            { x: 0, y: computedYMin },
            { x: 0, y: computedYMax }
          ];

          // Bind scale limits precisely to dataset extremes
          chart.options.scales.x.min = min;
          chart.options.scales.x.max = max;
          chart.options.scales.y.min = computedYMin;
          chart.options.scales.y.max = computedYMax;

          chart.update();
        } catch (error) {
          message.textContent = error.message;
          chart.data.datasets.forEach(dataset => { dataset.data = []; });
          chart.update();
        }
      }

      const inputs = [expressionInput, minInput, maxInput];
      inputs.forEach(input => input.addEventListener("input", redraw));
      redraw();

      return () => {
        inputs.forEach(input => input.removeEventListener("input", redraw));
        chart.destroy();
        container.replaceChildren();
      };
    }
  };
})();
