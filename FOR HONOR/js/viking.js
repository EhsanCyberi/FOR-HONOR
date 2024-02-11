const $ = document;

// ---------------- viking ---------------------
const btnrider = $.getElementById('btn-rider');
const btnsalar = $.getElementById('btn-salar');
const btnberzker = $.getElementById('btn-berzker');
const btnvalkery = $.getElementById('btn-valkery');
const btnhilander = $.getElementById('btn-hilander');
const btnjurmo = $.getElementById('btn-jurmo');
const btnbower = $.getElementById('btn-bower');

const button = $.getElementById('button');
const wheatElem = $.querySelector('.wheat');
const math = $.getElementById('math');

const inprider = $.getElementById('input-rider');
const inpsalar = $.getElementById('input-salar');
const inpberzker = $.getElementById('input-berzker');
const inpvalkery = $.getElementById('input-valkery');
const inphilander = $.getElementById('input-hilander');
const inpjurmo = $.getElementById('input-jurmo');
const inpbower = $.getElementById('input-bower');
// ---------------------------------------------------------

let solid = {
    hilander: 3,
    jurmo: 2,
    valkery: 2,
    berzker: 1,
    salar: 1,
    rider: 2,
    bower: 1,
}

function bower() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpbower.value = num;
}

function hilander() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inphilander.value = num;
}

function jurmo() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpjurmo.value = num;
}

function valkery() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpvalkery.value = num;
}

function berzker() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpberzker.value = num;
}

function salar() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpsalar.value = num;
}

function rider() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inprider.value = num;
}

function buttons() {
    let wheat = (inprider.value * solid.rider) + (inpsalar.value * solid.salar) + (inpberzker.value * solid.berzker) + (inpvalkery.value * solid.valkery) + (inphilander.value * solid.hilander) + (inpjurmo.value * solid.jurmo) + (inpbower.value * solid.bower);
    let result = math.value - wheat;
    wheatElem.innerHTML = result;
}

btnrider.addEventListener('click', rider);
btnsalar.addEventListener('click', salar);
btnberzker.addEventListener('click', berzker);
btnvalkery.addEventListener('click', valkery);
btnhilander.addEventListener('click', hilander);
btnjurmo.addEventListener('click', jurmo);
btnbower.addEventListener('click', bower);
button.addEventListener('click', buttons);