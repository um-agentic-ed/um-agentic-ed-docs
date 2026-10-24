// Generated from widget block instructions last updated: 2026-10-23T12:56:41.125Z
(function () {
  "use strict";

  const widgetKey = "creating-apps/content-generation/ai-generated-content/data-file-blocks/csv-file-table";
  const dataFileName = "user-csv-file";

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let quoted = false;

    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];
      if (quoted) {
        if (character === '"' && text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else if (character === '"') {
          quoted = false;
        } else {
          field += character;
        }
      } else if (character === '"' && field === "") {
        quoted = true;
      } else if (character === ",") {
        row.push(field);
        field = "";
      } else if (character === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else if (character !== "\r") {
        field += character;
      }
    }

    if (quoted) throw new Error("The CSV file contains an unclosed quoted field.");
    if (field !== "" || row.length > 0) {
      row.push(field);
      rows.push(row);
    }
    return rows.filter((values) => values.some((value) => value !== ""));
  }

  function uniqueHeaders(source, count) {
    const used = new Set();
    return Array.from({ length: count }, (_, index) => {
      const base = String(source[index] || "").trim() || `Column ${index + 1}`;
      let label = base;
      let suffix = 2;
      while (used.has(label)) {
        label = `${base} (${suffix})`;
        suffix += 1;
      }
      used.add(label);
      return label;
    });
  }

  window.umedAppWidgets[widgetKey] = {
    init(container) {
      const controls = document.createElement("div");
      controls.className = "widget-controls";
      // Inline flex layout prevents awkward line wraps & spacing issues
      controls.style.display = "flex";
      controls.style.alignItems = "center";
      controls.style.marginBottom = "8px";

      const headerLabel = document.createElement("label");
      headerLabel.className = "widget-control";
      headerLabel.style.display = "inline-flex";
      headerLabel.style.flexDirection = "row";
      headerLabel.style.alignItems = "center";
      headerLabel.style.gap = "6px";
      headerLabel.style.cursor = "pointer";
      headerLabel.style.whiteSpace = "nowrap";

      const headerCheckbox = document.createElement("input");
      headerCheckbox.type = "checkbox";
      headerCheckbox.checked = true;
      headerCheckbox.style.margin = "0";

      headerLabel.append(headerCheckbox, document.createTextNode("My data has headers"));
      controls.append(headerLabel);

      const status = document.createElement("p");
      status.textContent = "Upload a CSV file to display its data.";
      const tableElement = document.createElement("div");
      container.append(controls, status, tableElement);

      let table = null;
      let csvText = null;
      let loadSequence = 0;
      let destroyed = false;

      const clearTable = () => {
        if (table) {
          table.destroy();
          table = null;
        }
        tableElement.replaceChildren();
      };

      const render = () => {
        clearTable();
        if (csvText === null) {
          status.textContent = "Upload a CSV file to display its data.";
          return;
        }

        try {
          const rows = parseCsv(csvText);
          if (rows.length === 0) {
            status.textContent = "The uploaded CSV file has no data rows.";
            return;
          }

          const hasHeaders = headerCheckbox.checked;
          const dataRows = hasHeaders ? rows.slice(1) : rows;
          const columnCount = Math.min(5, Math.max(...rows.map((row) => row.length)));
          const headers = uniqueHeaders(hasHeaders ? rows[0] : [], columnCount);
          const data = dataRows.map((row) => Object.fromEntries(
            Array.from({ length: columnCount }, (_, index) => [`column${index}`, row[index] || ""])
          ));

          status.textContent = data.length === 0
            ? "The CSV file contains headers but no data rows."
            : `Showing ${data.length} data row${data.length === 1 ? "" : "s"} and ${columnCount} column${columnCount === 1 ? "" : "s"}.`;
          status.style.margin = "0";
            table = new Tabulator(tableElement, {
            data,
            layout: "fitColumns",
            pagination: data.length > 5,
            paginationSize: 5,
            paginationSizeSelector: [5, 10, 20],
            columns: headers.map((title, index) => ({
              title,
              field: `column${index}`,
              sorter: "string",
              headerFilter: "input",
              formatter: "plaintext"
            }))
          });
        } catch (error) {
          status.textContent = error instanceof Error ? error.message : "The CSV file could not be read.";
        }
      };

      const handleHeaderChange = () => render();
      headerCheckbox.addEventListener("change", handleHeaderChange);

      const unsubscribe = window.umedDataFiles.onChange(dataFileName, async () => {
        const sequence = ++loadSequence;
        clearTable();
        status.textContent = "Reading CSV file…";
        try {
          const text = await window.umedDataFiles.getText(dataFileName);
          if (destroyed || sequence !== loadSequence) return;
          csvText = text;
          render();
        } catch (error) {
          if (destroyed || sequence !== loadSequence) return;
          csvText = null;
          status.textContent = error instanceof Error ? error.message : "The CSV file could not be read.";
        }
      });

      return () => {
        destroyed = true;
        loadSequence += 1;
        headerCheckbox.removeEventListener("change", handleHeaderChange);
        unsubscribe();
        clearTable();
      };
    }
  };
})();
