// Timer variables
let countdownValue = 3;
const countdownElement = document.getElementById('countdown');
let pageLoaded = false; // Variable to track if the page has fully loaded

// Function to start countdown
function startCountdown() {
  countdownElement.innerText = countdownValue;  // Set initial value
  const interval = setInterval(() => {
    countdownValue -= 1; // Decrease countdown by 1

    if (countdownValue > 0) {
      countdownElement.innerText = countdownValue;
    } else {
      // Countdown finished
      clearInterval(interval); // Stop countdown when it reaches 0

      if (!pageLoaded) {
        // If the page is not fully loaded, show the message
        countdownElement.innerText = "Page should load soon...";
      } else {
        // If page is already loaded, hide the loader immediately
        document.body.classList.remove('loading');
      }
    }
  }, 1000); // Every 1 second
}

// Loader logic when DOM is loaded
window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loading');
    startCountdown(); // Start countdown as soon as the DOM is ready
});

// Check if the page is fully loaded
window.addEventListener('load', function() {
    pageLoaded = true; // Mark the page as fully loaded

    // If the countdown is finished, remove the loader immediately
    if (countdownValue <= 0) {
        document.body.classList.remove('loading');
    }
});

//Active class
const sections = document.querySelectorAll('.auto');
const navLinks = document.querySelectorAll('.dash');

const removeActiveClasses = () => {
  navLinks.forEach(link => link.classList.remove('open'));
};

// Create an IntersectionObserver to observe each section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      removeActiveClasses();

      const activeLink = document.querySelector(`a[href="#${id}"]`);
      console.log(activeLink);
      activeLink.classList.add('open');
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of the section is in view
});

// Observe each section
sections.forEach(section => observer.observe(section));

//Parallax
const title = document.querySelector('.title')
const leafg1 = document.querySelector('.leafg1')
const leafg2 = document.querySelector('.leafg2')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')

document.addEventListener('scroll', function () {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leafg1.style.marginLeft = -value + 'px'
    leafg2.style.marginLeft = value + 'px'
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
document.addEventListener("DOMContentLoaded", function () {
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
    arrowLeft.addEventListener('click', function () {
        currentIndex = Math.max(0, currentIndex - 1);
        toggleTabs();
    });

    // Event listener for right arrow click
    arrowRight.addEventListener('click', function () {
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

let SHEET_ID = '1YIZyp8rPT_Fpqi0IYmhic1Ho7crtCukBvSiRKCvBB64';
let SHEET_TITLE = 'time';

let SHEET_RANGE = 'A3:C9';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values
        console.log('data', length)

        var table = document.getElementById('day-1');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'F3:H10';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'K3:M7';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'A14:C21';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'F14:H20';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'K14:M20';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'A25:C27';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    });
SHEET_RANGE = 'F25:H33';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    });
//////////////////////////////////////////////ON STAGE DATA///////////////////////////////////////////////////////////
// JavaScript to handle arrow button clicks
document.addEventListener("DOMContentLoaded", function () {
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
    arrowLeft2.addEventListener('click', function () {
        currentIndex = Math.max(0, currentIndex - 1);
        toggleTabs();
    });

    // Event listener for right arrow click
    arrowRight2.addEventListener('click', function () {
        currentIndex = Math.min(tabs.length - 2, currentIndex + 1);
        toggleTabs();
    });

    // Initial toggle to show only the first two buttons
    toggleTabs();
});

SHEET_RANGE = 'A38:C40';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;

        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'E38:G40';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'I38:K40';
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

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'A46:C48';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

    fetch(FULL_URL)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let length = data.table.rows.length;//total number of values

            var table = document.getElementById('onday-4');// table selector

            for (let i = 0; i < length; i++) {

                var newRow = table.insertRow();// insert rows

                var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);

                cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
                cell2.innerHTML = data.table.rows[i].c[1].v;
                cell3.innerHTML = data.table.rows[i].c[2].v;
            }
            table.deleteRow(1)

        })
        SHEET_RANGE = 'A53:C54';
    FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

    fetch(FULL_URL)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let length = data.table.rows.length;//total number of values

            var table = document.getElementById('onday-5');// table selector

            for (let i = 0; i < length; i++) {

                var newRow = table.insertRow();// insert rows

                var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);

                cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
                cell2.innerHTML = data.table.rows[i].c[1].v;
                cell3.innerHTML = data.table.rows[i].c[2].v;
            }
            table.deleteRow(1)

        })
        SHEET_RANGE = 'E46:G48';
        FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

        fetch(FULL_URL)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                let length = data.table.rows.length;//total number of values

                var table = document.getElementById('onday-6');// table selector

                for (let i = 0; i < length; i++) {

                    var newRow = table.insertRow();// insert rows

                    var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
                    var cell2 = newRow.insertCell(1);
                    var cell3 = newRow.insertCell(2);

                    cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
                    cell2.innerHTML = data.table.rows[i].c[1].v;
                    cell3.innerHTML = data.table.rows[i].c[2].v;
                }
                table.deleteRow(1)

            })
            SHEET_RANGE = 'I46:K46';
            FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

            fetch(FULL_URL)
                .then(res => res.text())
                .then(rep => {
                    let data = JSON.parse(rep.substr(47).slice(0, -2));
                    let length = data.table.rows.length;//total number of values

                    var table = document.getElementById('onday-7');// table selector

                    for (let i = 0; i < length; i++) {

                        var newRow = table.insertRow();// insert rows

                        var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);

                        cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
                        cell2.innerHTML = data.table.rows[i].c[1].v;
                        cell3.innerHTML = data.table.rows[i].c[2].v;
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
function checkinputs() {
    const items = document.querySelectorAll(".input");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}

function sendMessage() {
    checkinputs();
    const form = document.querySelector('form');
    const fullName = document.getElementById('name');
    const phone = document.getElementById('email');
    const sub = document.getElementById('subject');
    const text = document.getElementById('message');

    if (!fullName.classList.contains("error") && !phone.classList.contains("error") && !sub.classList.contains("error") && !text.classList.contains("error")) {
        (function () {
            emailjs.init('c5bIev_sFULKR0TmQ');
        })();

        var serviceID = 'service_dxp6m5c';
        var templateID = 'template_k2d00n4';

        var params = {
            sendername: document.querySelector('#name').value,
            senderemail: document.querySelector('#email').value,
            subject: document.querySelector('#subject').value,
            message: document.querySelector('#message').value,
        }

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                Swal.fire({
                    title: "Thank You!",
                    text: "Feedback send successfully!",
                    icon: "success"
                });
            })
            .catch();

        form.reset();
        return false;
    }

}