(function () {
    // Function to format the date in a readable way
    function formatDate(date) {
        if (!date) return "Date not available";
        const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
        return new Date(date).toLocaleDateString("en-US", options);
    }

    // Function to display file dates
    function displayFileDates() {
        const container = document.createElement("div");
        container.style = "background: #f8f9fa; padding: 10px; border: 1px solid #ccc; margin-top: 10px;";

        // Last modified date
        const lastModified = document.lastModified;
        const lastModifiedElement = document.createElement("p");
        lastModifiedElement.textContent = `Last Modified Date: ${formatDate(lastModified)}`;
        container.appendChild(lastModifiedElement);

        // Creation date placeholder (not directly accessible via JavaScript)
        const creationElement = document.createElement("p");
        creationElement.textContent = "Creation Date: Not available (dependent on server-side handling)";
        container.appendChild(creationElement);

        document.body.appendChild(container);
    }

    // Call the display function after the page has loaded
    window.onload = displayFileDates;
})();
