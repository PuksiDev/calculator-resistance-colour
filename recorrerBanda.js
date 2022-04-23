var $boton1 = document.getElementById('anterior');
var $boton2 = document.getElementById('siguiente');
// la variable f representa la numeración de las bandas.
let f = 1;
/* la variable bandaActual representa la banda a la que
se le aplicara color. */
let bandaActual = $banda1;

// funcion para asignar a que banda se le aplicara color.
function recorrer() {
  if (f == 1) {
    bandaActual = $banda1;
  } else if (f == 2) {
    bandaActual = $banda2;
  } else if (f == 3) {
    bandaActual = $banda3;
  }
};

// funcion que servira para el boton 2
function sumar() {
  f++;
  if (f > 3) {
    f = 3;
  }
};

// funcion que servira para el boton 1
function restar() {
  f--;
  if (f < 1) {
    f = 1;
  }
};

// evento para boton 2 (siguiente)
$boton2.addEventListener('click', () => {
  sumar();
  recorrer();
  console.log(f);
});

// evento para boton 1 (anterior)

$boton1.addEventListener('click', () => {
  restar();
  recorrer();
  console.log(f);
});
