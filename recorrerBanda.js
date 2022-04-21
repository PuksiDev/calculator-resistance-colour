var $boton1 = document.getElementById('anterior');
var $boton2 = document.getElementById('siguiente');

let f = 1;
let bandaActual = $banda1;

function recorrer() {
  if (f == 1) {
    bandaActual = $banda1;
  } else if (f == 2) {
    bandaActual = $banda2;
  } else if (f == 3) {
    bandaActual = $banda3;
  }
};

function sumar() {
  f++;
};

$boton2.addEventListener('click', () => {
  sumar();
  recorrer();
})
