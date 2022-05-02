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
var $banda1 = document.getElementById('banda1')
var $banda2 = document.getElementById('banda2');
var $banda3 = document.getElementById('banda3');


function cambiarColor (c, b) {
  if (c == "negro") {
    b.style.fill = "black";
  } else if (c == "cafe") {
    b.style.fill = "Maroon";
  } else if (c == "rojo") {
    b.style.fill = "red";
  } else if (c == "naranja") {
    b.style.fill = "orange";
  } else if (c == "amarillo") {
    b.style.fill = "yellow";
  } else if (c == "verde") {
    b.style.fill = "green";
  } else if (c == "azul") {
    b.style.fill = "blue";
  } else if (c == "purpura") {
    b.style.fill = "purple";
  } else if (c == "gris") {
    b.style.fill = "gray";
  } else if (c == "blanco") {
    b.style.fill = "white";
  }
 }

// eventos al hacer clic en cada color.
$negro[0].addEventListener("click", () => {
   cambiarColor("negro", bandaActual);
   const valorNegro = 0;
   valorColor = valorNegro;
   const multNegro = 1;
   valorMult = multNegro;
   darValor();
 });

$cafe[0].addEventListener("click", () => {
  cambiarColor("cafe", bandaActual);
  const valorCafe = 1;
  valorColor = valorCafe;
  const multCafe = 10;
  valorMult = multCafe;
  darValor();
});

$rojo[0].addEventListener("click", () => {
  cambiarColor("rojo", bandaActual);
  const valorRojo = 2;
  valorColor = valorRojo;
  const multRojo = 100;
  valorMult = multRojo;
  darValor();
});

$naranja[0].addEventListener("click", () => {
  cambiarColor("naranja", bandaActual);
  const valorNaranja = 3;
  valorColor = valorNaranja;
  const multNaranja = 1000;
  valorMult = multNaranja;
  darValor();

});

$amarillo[0].addEventListener("click", () => {
  cambiarColor("amarillo", bandaActual);
  const valorAmarillo = 4;
  valorColor = valorAmarillo;
  const multAmarillo = 10000;
  valorMult = multAmarillo;
  darValor();
});

$verde[0].addEventListener("click", () => {
  cambiarColor("verde", bandaActual);
  const valorVerde = 5;
  valorColor = valorVerde;
  const multVerde = 100000;
  valorMult = multVerde;
  darValor();
});

$azul[0].addEventListener("click", () => {
  cambiarColor("azul", bandaActual);
  const valorAzul = 6;
  valorColor = valorAzul;
  const multAzul = 1000000;
  valorMult = multAzul;
  darValor();
});

$purpura[0].addEventListener("click", () => {
  cambiarColor("purpura", bandaActual);
  const valorPurpura = 7;
  valorColor = valorPurpura;
  const multPurpura = 10000000;
  valorMult = multPurpura;
  darValor();
});

$gris[0].addEventListener("click", () => {
  cambiarColor("gris", bandaActual);
  const valorGris = 8;
  valorColor = valorGris;
  const multGris = 100000000;
  valorMult = multGris;
  darValor();

});

$blanco[0].addEventListener("click", () => {
  cambiarColor("blanco", bandaActual);
  const valorBlanco = 9;
  valorColor = valorBlanco;
  const multBlanco = 1000000000;
  valorMult = multBlanco;
  darValor();
});
