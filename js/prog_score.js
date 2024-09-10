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

let SHEET_ID = '1czaTMcUeVrUa435utQrGutTOJuY4asHFzrHLcNkCtjI';
let SHEET_TITLE = 'score';
let SHEET_RANGE = 'A1:D2';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

let Render = "render";

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));

        document.getElementById('team-name1').innerHTML = data.table.cols[0].label;
        document.getElementById('team-name2').innerHTML = data.table.cols[1].label;
        document.getElementById('team-name3').innerHTML = data.table.cols[2].label;
        document.getElementById('team-name4').innerHTML = data.table.cols[3].label;
        if (Render === "render") {
            document.getElementById('score1').innerHTML = data.table.rows[0].c[0].v-5;
            document.getElementById('score2').innerHTML = data.table.rows[0].c[1].v-30;
            document.getElementById('score3').innerHTML = data.table.rows[0].c[2].v-30;
            document.getElementById('score4').innerHTML = data.table.rows[0].c[3].v-45;

        } else {
            document.getElementById('score1').innerHTML = "Loading....";
            document.getElementById('score2').innerHTML = "Loading....";
            document.getElementById('score3').innerHTML = "Loading....";
            document.getElementById('score4').innerHTML = "Loading....";
        }
    })
    .catch(err => console.error('Error fetching data:', err));

SHEET_TITLE = 'th_on';
SHEET_RANGE = 'A1:E20';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('th-onstage');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows
            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
            cell5.innerHTML = data.table.rows[i].c[4].v;
        }
        table.deleteRow(1)

    })

SHEET_TITLE = 'th_off';
SHEET_RANGE = 'A1:E20';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;

        var table = document.getElementById('th-offstage');

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = data.table.rows[i].c[0].v;
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
            cell5.innerHTML = data.table.rows[i].c[4].v;

        }
        table.deleteRow(1)

    })
SHEET_TITLE = 'al_on';
SHEET_RANGE = 'A1:E22';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;

        var table = document.getElementById('al-onstage');

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = data.table.rows[i].c[0].v;
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
            cell5.innerHTML = data.table.rows[i].c[4].v;

        }
        table.deleteRow(1)

    })
SHEET_TITLE = 'al_off';
SHEET_RANGE = 'A1:E29';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;

        var table = document.getElementById('al-offstage');

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = data.table.rows[i].c[0].v;
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
            cell5.innerHTML = data.table.rows[i].c[4].v;

        }
        table.deleteRow(1)

    })
SHEET_TITLE = 'gn_on';
SHEET_RANGE = 'A1:E7';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;

        var table = document.getElementById('gn-onstage');

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = data.table.rows[i].c[0].v;
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
            cell5.innerHTML = data.table.rows[i].c[4].v;

        }
        table.deleteRow(1)

    })
SHEET_TITLE = 'gn_off';
SHEET_RANGE = 'A1:E9';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;

        var table = document.getElementById('gn-offstage');

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            cell1.innerHTML = data.table.rows[i].c[0].v;
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
            cell5.innerHTML = data.table.rows[i].c[4].v;

        }
        table.deleteRow(1)

    })

function aliya() {
    // show hide table
    var aliya = document.getElementById("aliya");
    var thdy = document.getElementById("thdy");
    var general = document.getElementById("general");

    aliya.style.display = 'flex';
    thdy.style.display = 'none';
    general.style.display = 'none';

    // buton color change
    var thbt = document.getElementById('thbutton');
    var albt = document.getElementById('albutton');
    var gnbt = document.getElementById('gnbutton');

    if (thbt.classList.contains('active-b')) {
        thbt.classList.remove('active-b');
    } else if (gnbt.classList.contains('active-b')) {
        gnbt.classList.remove('active-b');
    }
    albt.classList.add('active-b')
}
function thdy() {
    // show hide table
    var aliya = document.getElementById("aliya");
    var thdy = document.getElementById("thdy");
    var general = document.getElementById("general");

    aliya.style.display = 'none';
    thdy.style.display = 'flex';
    general.style.display = 'none';

    // buton color change
    var thbt = document.getElementById('thbutton');
    var albt = document.getElementById('albutton');
    var gnbt = document.getElementById('gnbutton');

    if (albt.classList.contains('active-b')) {
        albt.classList.remove('active-b');
    } else if (gnbt.classList.contains('active-b')) {
        gnbt.classList.remove('active-b');
    }
    thbt.classList.add('active-b')
}
function general() {
    // show hide table
    var aliya = document.getElementById("aliya");
    var thdy = document.getElementById("thdy");
    var general = document.getElementById("general");

    aliya.style.display = 'none';
    thdy.style.display = 'none';
    general.style.display = 'flex';

    // buton color change
    var thbt = document.getElementById('thbutton');
    var albt = document.getElementById('albutton');
    var gnbt = document.getElementById('gnbutton');

    if (thbt.classList.contains('active-b')) {
        thbt.classList.remove('active-b');
    } else if (albt.classList.contains('active-b')) {
        albt.classList.remove('active-b');
    }
    gnbt.classList.add('active-b')
}

function hideAllTables() {
    // function for hiding all tables
    var tb_th_on = document.getElementById('tb-th-on');
    var tb_th_off = document.getElementById('tb-th-off');
    var tb_al_on = document.getElementById('tb-al-on');
    var tb_al_off = document.getElementById('tb-al-off');
    var tb_gn_on = document.getElementById('tb-gn-on');
    var tb_gn_off = document.getElementById('tb-gn-off');

    tb_th_on.style.display = 'none';
    tb_th_off.style.display = 'none';
    tb_al_on.style.display = 'none';
    tb_al_off.style.display = 'none';
    tb_gn_on.style.display = 'none';
    tb_gn_off.style.display = 'none';
}

function thScoreBtn() {
    // show the off/on-stage butttons for thamheediyya
    var thStage = document.getElementById('th-stage');
    var alStage = document.getElementById('al-stage');
    var gnStage = document.getElementById('gn-stage');

    thStage.style.display = 'flex';
    alStage.style.display = 'none';
    gnStage.style.display = 'none';

    // color change for the active button among th/al/gn
    var thStageBtn = document.getElementById('th-score-btn');
    var alStageBtn = document.getElementById('al-score-btn');
    var gnStageBtn = document.getElementById('gn-score-btn');

    if (gnStageBtn.classList.contains('active-b')) {
        gnStageBtn.classList.remove('active-b');
    } else if (alStageBtn.classList.contains('active-b')) {
        alStageBtn.classList.remove('active-b');
    }
    thStageBtn.classList.add('active-b')

    // show the on-stage table at the opening
    var tbth = document.getElementById('tb-th-on');
    hideAllTables();
    tbth.style.display = "flex"
}
function alScoreBtn() {
    // show the off/on-stage butttons for aliya
    var thStage = document.getElementById('th-stage');
    var alStage = document.getElementById('al-stage');
    var gnStage = document.getElementById('gn-stage');

    thStage.style.display = 'none';
    alStage.style.display = 'flex';
    gnStage.style.display = 'none';

    // color change for the active button among th/al/gn
    var thStageBtn = document.getElementById('th-score-btn');
    var alStageBtn = document.getElementById('al-score-btn');
    var gnStageBtn = document.getElementById('gn-score-btn');

    if (gnStageBtn.classList.contains('active-b')) {
        gnStageBtn.classList.remove('active-b');
    } else if (thStageBtn.classList.contains('active-b')) {
        thStageBtn.classList.remove('active-b');
    }
    alStageBtn.classList.add('active-b')

    // show the on-stage table at the opening
    var tbal = document.getElementById('tb-al-on');
    hideAllTables();
    tbal.style.display = "flex"
}
function gnScoreBtn() {
    // show the off/on-stage butttons for general
    var thStage = document.getElementById('th-stage');
    var alStage = document.getElementById('al-stage');
    var gnStage = document.getElementById('gn-stage');

    thStage.style.display = 'none';
    alStage.style.display = 'none';
    gnStage.style.display = 'flex';

    // color change for the active button among th/al/gn
    var thStageBtn = document.getElementById('th-score-btn');
    var alStageBtn = document.getElementById('al-score-btn');
    var gnStageBtn = document.getElementById('gn-score-btn');

    if (thStageBtn.classList.contains('active-b')) {
        thStageBtn.classList.remove('active-b');
    } else if (alStageBtn.classList.contains('active-b')) {
        alStageBtn.classList.remove('active-b');
    }
    gnStageBtn.classList.add('active-b')

    // show the on-stage table at the opening
    var tbgn = document.getElementById('tb-gn-on');
    hideAllTables();
    tbgn.style.display = "flex"
}

function thOnBtn() {
    // onstage selection button for thamheediyya

    //active button colour change
    var thOn = document.getElementById('btn-th-on');
    var thOff = document.getElementById('btn-th-off');

    if (thOff.classList.contains('active-b')) {
        thOff.classList.remove('active-b');
    }
    thOn.classList.add('active-b')

    //show table
    var tb_th_on = document.getElementById('tb-th-on');
    hideAllTables();
    tb_th_on.style.display = 'flex';
}
function thOffBtn() {
    //off-stage selection button for thamheediyya

    //active button colour change
    var thOn = document.getElementById('btn-th-on');
    var thOff = document.getElementById('btn-th-off');

    if (thOn.classList.contains('active-b')) {
        thOn.classList.remove('active-b');
    }
    thOff.classList.add('active-b');

    //show table
    var tb_th_off = document.getElementById('tb-th-off');
    hideAllTables();
    tb_th_off.style.display = 'flex';
}
function alOnBtn() {
    //on-stage selection button for aliya

    //active button colour change
    var alOn = document.getElementById('btn-al-on');
    var alOff = document.getElementById('btn-al-off');

    if (alOff.classList.contains('active-b')) {
        alOff.classList.remove('active-b');
    }
    alOn.classList.add('active-b');

    //show table
    var tb_al_on = document.getElementById('tb-al-on');
    hideAllTables();
    tb_al_on.style.display = 'flex'
}
function alOffBtn() {
    //off-stage selection button for aliya

    //active button colour change
    var alOn = document.getElementById('btn-al-on');
    var alOff = document.getElementById('btn-al-off');

    if (alOn.classList.contains('active-b')) {
        alOn.classList.remove('active-b');
    }
    alOff.classList.add('active-b');

    //show table
    var tb_al_off = document.getElementById('tb-al-off');
    hideAllTables();
    tb_al_off.style.display = 'flex'
}
function gnOnBtn() {
    //on-stage selection button for general

    //active button colour change
    var gnOn = document.getElementById('btn-gn-on');
    var gnOff = document.getElementById('btn-gn-off');

    if (gnOff.classList.contains('active-b')) {
        gnOff.classList.remove('active-b');
    }
    gnOn.classList.add('active-b')

    //show table
    var tb_gn_on = document.getElementById('tb-gn-on');
    hideAllTables();
    tb_gn_on.style.display = 'flex'
}
function gnOffBtn() {
    //off-stage selection button for general

    //active button colour change
    var gnOn = document.getElementById('btn-gn-on');
    var gnOff = document.getElementById('btn-gn-off');

    if (gnOn.classList.contains('active-b')) {
        gnOn.classList.remove('active-b');
    }
    gnOff.classList.add('active-b')

    //show table
    var tb_gn_off = document.getElementById('tb-gn-off');
    hideAllTables();
    tb_gn_off.style.display = 'flex'
}