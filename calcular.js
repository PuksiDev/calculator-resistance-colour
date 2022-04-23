// boton para calcular la resistencia eléctrica.
var $boton3 = document.getElementById("calcular");
// variable donde se guardara el resultado
var $resultado = document.getElementById('resultado');
// volor de las bandas por defecto.
var valorBanda1 = 6; //0
var valorBanda2 = 6; //0
var valorBanda3 = 1000000;
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

// evento al hacer clic en el boton 3 (calcular).
$boton3.addEventListener('click', () => {
  let bandaUnoDos = parseInt("" + valorBanda1 + valorBanda2);
  let resultado = bandaUnoDos * valorBanda3;
  $resultado.textContent = "Resultado final: " + `${resultado}`;
  console.log(bandaUnoDos);
  console.log("resultado final: " + resultado)
});
// // let resultado = bandaUnoDos * valorBanda3;



























// codigo ejemplo para concatenar dos numeros y lugo verificar.
// const numVar1 = 5;
// const numVar2 = 6;
// var c = parseInt("" + numVar1 + numVar2);
// console.log(c);
// console.log(Number.isInteger(c))
