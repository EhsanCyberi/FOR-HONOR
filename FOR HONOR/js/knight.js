const $ = document;

const button = $.getElementById('button');
const wheatElem = $.querySelector('.wheat');
const math = $.getElementById('math');

// ---------------- knight ---------------------
const btnWarden = $.getElementById('btn-warden');
const btnCankuer = $.getElementById('btn-cankuer');
const btnPickper = $.getElementById('btn-pickper');
const btnLove = $.getElementById('btn-love');
const btnGeladiator = $.getElementById('btn-geladiator');
const btnBlack = $.getElementById('btn-black');
const btnbower = $.getElementById('btn-bower');

const inpWarden = $.getElementById('input-warden');
const inpCankuer = $.getElementById('input-cankuer');
const inpPickper = $.getElementById('input-pickper');
const inpLove = $.getElementById('input-love');
const inpGeladiator = $.getElementById('input-geladiator');
const inpBlack = $.getElementById('input-black');
const inpbower = $.getElementById('input-bower');
// ---------------------------------------------------------

let solider = {
    warden: 1,
    cankuer: 1,
    pickper: 1,
    love: 3,
    geladiator: 2,
    black: 2,
    bower: 1,
}

function bower() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpbower.value = num;
}

function warden() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpWarden.value = num;
}

function cankuer() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpCankuer.value = num;
}

function pickper() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpPickper.value = num;
}

function love() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpLove.value = num;
}

function geladiator() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpGeladiator.value = num;
}

function black() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpBlack.value = num;
}

function buttons() {
    let wheat = (inpBlack.value * solider.black) + (inpCankuer.value * solider.cankuer) + (inpGeladiator.value * solider.geladiator) + (inpLove.value * solider.love) + (inpPickper.value * solider.pickper) + (inpWarden.value * solider.warden) + (inpbower.value * solider.bower)
    let result = math.value - wheat;
    wheatElem.innerHTML = result;   
}

btnWarden.addEventListener('click', warden);
btnCankuer.addEventListener('click', cankuer);
btnPickper.addEventListener('click', pickper);
btnLove.addEventListener('click', love);
btnGeladiator.addEventListener('click', geladiator);
btnBlack.addEventListener('click', black);
btnbower.addEventListener('click', bower);
button.addEventListener('click', buttons);