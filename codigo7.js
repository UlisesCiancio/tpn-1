var costoK;
var kilometro;
var cuenta;

var kilometro=parseInt(prompt("Ingrese la cantidad de kilómetros recorridos en número enteros."));
var costoK=parseFloat(prompt("Ingrese el valor por hora."));

var cuenta=kilometro*costoK;

document.write("El valor de su ticket es de ",cuenta," pesos.");