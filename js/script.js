const $ = document;
const btntiandi = $.getElementById('btn-tiandi');
const btnjiang = $.getElementById('btn-jiang');
const btnrahebe = $.getElementById('btn-rahebe');
const btnnoksia = $.getElementById('btn-noksia');
const btnzhanhoo = $.getElementById('btn-zhanhoo');
const btnarabe = $.getElementById('btn-arabe');
const btnbower = $.getElementById('btn-bower');
const button = $.getElementById('button');
const wheatElem = $.querySelector('.wheat');
const math = $.getElementById('math');
const inptiandi = $.getElementById('input-tiandi');
const inpjiang = $.getElementById('input-jiang');
const inprahebe = $.getElementById('input-rahebe');
const inpnoksia = $.getElementById('input-noksia');
const inpzhanhoo = $.getElementById('input-zhanhoo');
const inparabe = $.getElementById('input-arabe');
const inpbower = $.getElementById('input-bower');
let sarbaz = {
    tiandi: 2,
    jiang: 3,
    noksia: 1,
    rahebe: 2,
    zhanhoo: 1,
    arabe: 5,
    bower: 1,
}
function tiandi() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inptiandi.value = num;
}
function jiang() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpjiang.value = num;
} 
function noksia() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpnoksia.value = num;
}
function rahebe() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inprahebe.value = num;
}
function bower() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpbower.value = num;
}
function zhanhoo() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inpzhanhoo.value = num;
}
function arabe() {
    let num = +prompt("اعداد را به انگلیسی وارد کنید :");
    inparabe.value = num;
}
function buttons() {
    let wheat = (inptiandi.value * sarbaz.tiandi) + (inpjiang.value * sarbaz.jiang) + (inpnoksia.value * sarbaz.noksia) + (inprahebe.value * sarbaz.rahebe) + (inpzhanhoo.value * sarbaz.zhanhoo) + (inparabe.value * sarbaz.arabe) + (inpbower.value * sarbaz.bower)
    let result = math.value - wheat;
    wheatElem.innerHTML = result;
}
btntiandi.addEventListener('click', tiandi);
btnjiang.addEventListener('click', jiang);
btnnoksia.addEventListener('click', noksia);
btnrahebe.addEventListener('click', rahebe);
btnzhanhoo.addEventListener('click', zhanhoo);
btnarabe.addEventListener('click', arabe);
btnbower.addEventListener('click', bower);
button.addEventListener('click', buttons);