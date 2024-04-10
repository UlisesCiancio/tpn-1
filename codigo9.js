var tiempo;
var costo;
var cuenta;

var tiempo=parseInt(prompt("Ingrese los minutos de llamada."));
var costo=parseInt(prompt("Ingrese el valor del minuto de llamada."));

var cuenta=tiempo*costo;

alert("El valor de la llamada es de "+cuenta+" pesos.");
