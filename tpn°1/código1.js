var base;
var altura;
var division;
var multi;

var base = parseInt(prompt("Ingrese la base del triángulo en centímetros."));
var altura = parseInt(prompt("Ingrese la altura del triángulo en centímetros."));

var multi= base * altura;
var division=multi / 2;
document.write("El área del triángulo es: ",division,"cm2");
