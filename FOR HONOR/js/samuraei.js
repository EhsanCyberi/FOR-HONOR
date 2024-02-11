const $ = document;

const button = $.getElementById('button');
const wheatElem = $.querySelector('.wheat');
const math = $.getElementById('math');

// ---------------- samuraei ---------------------
const btnkensi = $.getElementById('btn-kensi');
const btnshugoki = $.getElementById('btn-shugoki');
const btnnuboshi = $.getElementById('btn-nuboshi');
const btnaramusha = $.getElementById('btn-aramusha');
const btnshinobi = $.getElementById('btn-shinobi');
const btnhitoshi = $.getElementById('btn-hitoshi');
const btnbower = $.getElementById('btn-bower');

const inpkensi = $.getElementById('input-kensi');
const inpshugoki = $.getElementById('input-shugoki');
const inpnuboshi = $.getElementById('input-nuboshi');
const inparamusha = $.getElementById('input-aramusha');
const inpshinobi = $.getElementById('input-shinobi');
const inphitoshi = $.getElementById('input-hitoshi');
const inpbower = $.getElementById('input-bower');
// ---------------------------------------------------------

let solide = {
    kensi: 1,
    shugoki: 3,
    nuboshi: 2,
    aramusha: 1,
    shinobi: 1,
    hitoshi: 2,
    bower: 1,
}

function kensi() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpkensi.value = num;
}

function shugoki() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpshugoki.value = num;
}

function nuboshi() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpnuboshi.value = num;
}

function aramusha() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inparamusha.value = num;
}

function shinobi() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpshinobi.value = num;
}

function hitoshi() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inphitoshi.value = num;
}

function bower() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpbower.value = num;
}

function buttons() {
    let wheat = (inpkensi.value * solide.kensi) + (inpshugoki.value * solide.shugoki) + (inpnuboshi.value * solide.nuboshi) + (inparamusha.value * solide.aramusha) + (inpshinobi.value * solide.shinobi) + (inphitoshi.value * solide.hitoshi) + (inpbower.value * solide.bower)
    let result = math.value - wheat;
    wheatElem.innerHTML = result;   
}

btnkensi.addEventListener('click', kensi);
btnshugoki.addEventListener('click', shugoki);
btnnuboshi.addEventListener('click', nuboshi);
btnaramusha.addEventListener('click', aramusha);
btnshinobi.addEventListener('click', shinobi);
btnhitoshi.addEventListener('click', hitoshi);
btnbower.addEventListener('click', bower);
button.addEventListener('click', buttons);