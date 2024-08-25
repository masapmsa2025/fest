// Header Menu
function headerMenu() {
    const toggler = document.querySelector(".js-header-toggler");
    const menu = document.querySelector(".js-header-menu");
    const items = menu.querySelectorAll("li");

    const menuToggle = () => {
        menu.classList.toggle("open");
        toggler.classList.toggle("active");
    }
    toggler.addEventListener("click", menuToggle);

    items.forEach((item) => {
        item.querySelector("a").addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                menuToggle();
            }
        });
    });
}
headerMenu();

document.addEventListener('DOMContentLoaded', function () {
    // Google Sheets API parameters
    const sheetId = '167L_auEfxe4KMNBOmPjtG89bhfaJqycnqQdXHDq5B0E'; // Replace with your actual Google Sheet ID
    const sheetRange = 'Sheet1'; // Adjust the sheet name if necessary

    let rows = []; // Declare rows at the top level so it can be accessed everywhere

    // Fetch the Google Sheet data without an API key
    fetch(`https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetRange}`)
        .then(response => response.text())
        .then(data => {
            const json = JSON.parse(data.substr(47).slice(0, -2)); // Removing leading/trailing characters
            rows = json.table.rows.map(row => row.c.map(cell => (cell ? cell.v : ''))).slice(1); // Store data in rows
            console.log('data here',rows)
            populateTable(rows);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Populate the program table
    function populateTable(rows) {
        const tableBody = document.querySelector('#program-table tbody');
        tableBody.innerHTML = ''; // Clear the table body

        // Get unique program names
        const programs = [...new Set(rows.map(row => row[0]))];

        programs.forEach(programName => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${programName}</td>
                <td><button class="result-button" data-program-name="${programName}">Show Result</button></td>
            `;
            tableBody.appendChild(tr);
        });

        // Add event listeners to the result buttons
        document.querySelectorAll('.result-button').forEach(button => {
            button.addEventListener('click', function () {
                const programName = this.getAttribute('data-program-name');
                showModal(programName, rows);
            });
        });
    }

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const tableRows = document.querySelectorAll('#program-table tbody tr');

        tableRows.forEach(row => {
            const programName = row.cells[0].textContent.toLowerCase();
            if (programName.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Dropdown filtering functionality
    const dropdown = document.getElementById('result-dropdown');
    dropdown.addEventListener('change', function () {
        const selectedCategory = this.value.toLowerCase();
        const tableRows = document.querySelectorAll('#program-table tbody tr');

        tableRows.forEach(row => {
            const programName = row.cells[0].textContent;
            const programCategory = rows.find(r => r[0] === programName)[1].toLowerCase(); // Find the category of the program

            if (selectedCategory === 'all' || selectedCategory === programCategory) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Show modal with program details
    function showModal(programName, rows) {
        // Filter rows for the selected program
        const filteredRows = rows.filter(row => row[0] === programName);

        // Sort by Place (assuming 1st, 2nd, 3rd are stored as strings)
        const sortedRows = filteredRows.sort((a, b) => a[2].localeCompare(b[2]));

        // Set the modal title
        document.getElementById('modal-program-name').textContent = programName;

        // Populate the result table in the modal
        const resultTableBody = document.querySelector('#result-table tbody');
        resultTableBody.innerHTML = ''; // Clear previous data

        sortedRows.forEach(row => {
            const [programName, category, place, name, group, grade] = row;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td data-label="Place">${place}</td>
                <td data-label="Name">${name}</td>
                <td data-label="Group">${group}</td>
                <td data-label="Grade">${grade}</td>
            `;
            resultTableBody.appendChild(tr);
        });

        // Display the modal
        document.getElementById('result-modal').style.display = 'block';
    }

    // Close modal functionality
    document.querySelector('.close-button').addEventListener('click', function () {
        document.getElementById('result-modal').style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('result-modal')) {
            document.getElementById('result-modal').style.display = 'none';
        }
    });
});
