//Loader
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    document.body.classList.remove('loading');
    loader.style.display = 'none';
});

//Parallax
const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'
    
    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'
})

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

//schedule tabs
// JavaScript to handle arrow button clicks
document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer = document.querySelector('.schedule-tabs');
    const tabs = document.querySelectorAll('.js-schedule-tab');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    let currentIndex = 0;

    // Function to toggle visibility of tabs based on the current index
    function toggleTabs() {
        tabs.forEach((tab, index) => {
            if (index === currentIndex || index === currentIndex + 1) {
                tab.classList.remove('hidden');
            } else {
                tab.classList.add('hidden');
            }
        });
    }

    // Event listener for left arrow click
    arrowLeft.addEventListener('click', function() {
        currentIndex = Math.max(0, currentIndex - 1);
        toggleTabs();
    });

    // Event listener for right arrow click
    arrowRight.addEventListener('click', function() {
        currentIndex = Math.min(tabs.length - 2, currentIndex + 1);
        toggleTabs();
    });

    // Initial toggle to show only the first two buttons
    toggleTabs();
});

/* off stage / on stage */

//show active color in onstage and offstage
function scheduleTabes() {
    const tabes = document.querySelectorAll(".js-schedule-tabe");

    tabes.forEach((tabe) => {
        tabe.addEventListener("click", () => {
            if (tabe.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule-tabe.active").classList.remove("active");
            tabe.classList.add("active");
        });
    });
}
scheduleTabes();

// Show offstage initially
document.getElementById('offstage').style.display = 'block';
document.getElementById('scheduleOffstage').style.display = 'block';

function showstage(schedule) {
    // Hide all month containers and additional
    var stageContainers = document.querySelectorAll('.schedule-tabs');
    stageContainers.forEach(function (container) {
        container.style.display = 'none';
    });

    var additional = document.querySelectorAll('.schedule-content');
    additional.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the selected stage container
    var selectedstage = document.getElementById(schedule);
    if (selectedstage) {
        selectedstage.style.display = 'block';
    }

    // Show the additional content for the selected month
    var additionalContent = document.getElementById('schedule' + schedule.charAt(0).toUpperCase() + schedule.slice(1));
    if (additionalContent) {
        additionalContent.style.display = 'block';
    }
}

/*schedule timings */

let SHEET_ID = '1NTtWnFGtyC9K2qA6GnvgEk1wkIOpe4myKEJDRuNX1ZM';
let SHEET_TITLE = 'time';
let SHEET_RANGE = 'A2:D6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-1');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'F2:I6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-2');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'K2:N5';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-3');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'A9:D13';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-4');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'F9:I12';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-5');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'K9:N13';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-6');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'A16:D16';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-7');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    });
SHEET_RANGE = 'F16:I16';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-8');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    });
SHEET_RANGE = 'K16:N16';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-9');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    });
//////////////////////////////////////////////ON STAGE DATA///////////////////////////////////////////////////////////
// JavaScript to handle arrow button clicks
document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer = document.querySelector('.schedule-tabs');
    const tabs = document.querySelectorAll('.js-schedule2-tab');
    const arrowLeft2 = document.getElementById('arrow-left2');
    const arrowRight2 = document.getElementById('arrow-right2');

    let currentIndex = 0;

    // Function to toggle visibility of tabs based on the current index
    function toggleTabs() {
        tabs.forEach((tab, index) => {
            if (index === currentIndex || index === currentIndex + 1) {
                tab.classList.remove('hidden');
            } else {
                tab.classList.add('hidden');
            }
        });
    }

    // Event listener for left arrow click
    arrowLeft2.addEventListener('click', function() {
        currentIndex = Math.max(0, currentIndex - 1);
        toggleTabs();
    });

    // Event listener for right arrow click
    arrowRight2.addEventListener('click', function() {
        currentIndex = Math.min(tabs.length - 2, currentIndex + 1);
        toggleTabs();
    });

    // Initial toggle to show only the first two buttons
    toggleTabs();
});

SHEET_RANGE = 'P2:S6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('onday-1');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'U2:X10';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('onday-2');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'Z2:AC4';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('onday-3');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
/* schedule tabs */

function scheduleTabs() {
    const tabs = document.querySelectorAll(".js-schedule-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule-tab.active").classList.remove("active");
            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        });
    });
}
scheduleTabs();

/* schedule tabs2 */

function scheduleTabs2() {
    const tabs = document.querySelectorAll(".js-schedule2-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule2-tab.active").classList.remove("active");
            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule2-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        });
    });
}
scheduleTabs2();