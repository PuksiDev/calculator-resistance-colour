// paleta de colores
var $negro = document.getElementsByClassName('negro');
var $cafe = document.getElementsByClassName('cafe');
var $rojo = document.getElementsByClassName('rojo');
var $naranja = document.getElementsByClassName('naranja');
var $amarillo = document.getElementsByClassName('amarillo');
var $verde = document.getElementsByClassName('verde');
var $azul = document.getElementsByClassName('azul');
var $purpura = document.getElementsByClassName('purpura');
var $gris = document.getElementsByClassName('gris');
var $blanco = document.getElementsByClassName('blanco');

// bandas de la resistencia
var $banda1 = document.getElementById('banda1');
var $banda2 = document.getElementById('banda2');
var $banda3 = document.getElementById('banda3');

// console.log($negro)
// $negro[0].innerHTML = "hola";
// $negro[0].style.color = "white";

function cambiarColor (c, b) {
  if (c == "negro") {
    b.style.backgroundColor = "black";
  } else if (c == "cafe") {
    b.style.backgroundColor = "Maroon";
  } else if (c == "rojo") {
    b.style.backgroundColor = "red";
  }

  // else if (c == "naranja") {
  //   $banda1.style.backgroundColor = "orange";
  // } else if (c == "amarillo") {
  //   $banda1.style.backgroundColor = "yellow";
  // } else if (c == "verde") {
  //   $banda1.style.backgroundColor = "green";
  // } else if (c == "azul") {
  //   $banda1.style.backgroundColor = "blue";
  // } else if (c == "purpura") {
  //   $banda1.style.backgroundColor = "purple";
  // } else if (c == "gris") {
  //   $banda1.style.backgroundColor = "gray";
  // } else if (c == "blanco") {
  //   $banda1.style.backgroundColor = "white";
  // }
 }

$negro[0].addEventListener("click", () => {
   cambiarColor("negro", bandaActual);
 });

$cafe[0].addEventListener("click", () => {
  cambiarColor("cafe", bandaActual);
});

$rojo[0].addEventListener("click", () => {
  cambiarColor("rojo", bandaActual);
});

$naranja[0].addEventListener("click", () => {
  cambiarColor("naranja")
});

$amarillo[0].addEventListener("click", () => {
  cambiarColor("amarillo")
});

$verde[0].addEventListener("click", () => {
  cambiarColor("verde")
});

$azul[0].addEventListener("click", () => {
  cambiarColor("azul")
});

$purpura[0].addEventListener("click", () => {
  cambiarColor("purpura")
});

$gris[0].addEventListener("click", () => {
  cambiarColor("gris")
});

$blanco[0].addEventListener("click", () => {
  cambiarColor("blanco")
});
