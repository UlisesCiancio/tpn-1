var cobro;
var metros;
var precio;

var metros= parseInt(prompt("Ingrese la cnatidad de mts² a pintar."));
var cobro= parseInt(prompt("Ingresar el valor por mts²."));

var precio= metros*cobro;

document.write("El valor final del  trabajo es de ",precio," pésos.");