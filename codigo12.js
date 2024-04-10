var precio;
var descuento;
var precioD;
var precioconiva;

var precio=parseFloat(prompt("ingrese el precio del producto en pesos."));

var descuento= precio*0.2;
var precioD=precio*0.8;
var iva=precioD*1.15;

alert("El precio final es de "+precioconiva+" pesos. Usted se ahorró "+ descuento+ " pesos.");