// boton para calcular la resistencia eléctrica.
var $boton3 = document.getElementById("calcular");
// boton para reiniciar app
var $boton4 = document.getElementById('reiniciar');
// variable donde se guardara el resultado
var $resultado = document.getElementById('resultado');
var $extra = document.getElementById('extra');
// volor de las bandas por defecto.
var valorBanda1 = 0; //0
var valorBanda2 = 0; //0
var valorBanda3 = 1;
// valor de la primera y segunda banda.
var valorColor;
// valor de la tercera banda multiplicadora.
var valorMult;

function darValor() {
  if (bandaActual == $banda1) {
    valorBanda1 = valorColor;
  } else if (bandaActual == $banda2) {
    valorBanda2 = valorColor;
  } else if (bandaActual == $banda3) {
    valorBanda3 = valorMult;
  };
  console.log("valor color= " + valorColor)
};

// funcion para comvertir el resultado en k, m, g.
var k = 1000;
var m = 1000000;
var g = 1000000000;

function ohmAgiga(r) {
  let conversion = r * 1 / g;
  $extra.textContent = "= " + `${conversion}` + "G";
  $extra.style.border = "1px solid red";
  $extra.style.padding = "3px";
};

function ohmAmega(r) {
  let conversion = r * 1 / m;
  $extra.textContent = "= " + `${conversion}` + "M";
  $extra.style.border = "1px solid red";
  $extra.style.padding = "3px";
};

function ohmAkilo(r) {
  let conversion = r * 1 / k;
  $extra.textContent = "= " + `${conversion}` + "K";
  $extra.style.border = "1px solid red";
  $extra.style.padding = "3px";
};

// evento al hacer clic en el boton 3 (calcular).
$boton3.addEventListener('click', () => {
  let bandaUnoDos = parseInt("" + valorBanda1 + valorBanda2);
  let resultado = bandaUnoDos * valorBanda3;
  $resultado.textContent = "Resultado: " + `${resultado}` + " Ohms";
  if (resultado >= g) {
    ohmAgiga(resultado)
  } else if (resultado >= m) {
    ohmAmega(resultado)
  } else if (resultado >= k) {
    ohmAkilo(resultado)
  };
});
// evento al hacer click en el boton 4 (reiniciar)
$boton4.addEventListener('click', () => {
  location.reload();
});

// codigo ejemplo para concatenar dos numeros y lugo verificar.
// const numVar1 = 5;
// const numVar2 = 6;
// var c = parseInt("" + numVar1 + numVar2);
// console.log(c);
// console.log(Number.isInteger(c))
