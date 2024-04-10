var peso;
var valordolar =1000;
var cuenta;

var peso = parseInt(prompt("Ingrese la cantidad de pésos a calcular (el valor del dolar es 1000$)."));

var cuenta = peso/valordolar;
document.write("Podés comprar",cuenta,"cantidad de dólares.");