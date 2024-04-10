var kw;
var precio;
var cuenta;

var kw= parseInt(prompt("Ingrese los KW consumidos en el mes."));
var precio=parseInt(prompt("Ingrese el valor del KW."));

var cuenta=kw*precio;

alert("El valor del KW es de "+cuenta+" pesos.");