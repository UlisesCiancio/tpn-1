var precioA;
var metros;
var cuenta;

var metros=parseInt(prompt("Ingrese los mtrs² usados."));
var precioA=parseInt(prompt("Ingrese el valor del mtr² de agua."));

var cuenta=metros*precioA;

alert("El precio a pagar es de "+cuenta+" pesos")