const bdt = document.getElementById('bdt')
const btn = document.getElementById('btn1')
const btn1 = document.getElementById('btn2')
const usd = document.getElementById('usd');
const sgd = document.getElementById('sgd');
const cad = document.getElementById('cad');

btn.addEventListener('click', Converter);

function Converter() {
    if (bdt.value <= 0) {
        alert(`Enter value greater than 0`);
    } else {
        const newBdt = parseInt(bdt.value);
        const newUsd = (newBdt / 84.93).toFixed(2);
        const newSgd = (newBdt / 62.04).toFixed(2);
        const newCad = (newBdt / 63.85).toFixed(2);
        usd.value = newUsd;
        sgd.value = newSgd;
        cad.value = newCad;
    }
}

btn1.addEventListener('click', Reset);

function Reset() {
    bdt.value = 0;
    usd.value = 0;
    sgd.value = 0;
    cad.value = 0;
}