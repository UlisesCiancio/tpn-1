var preciohotel;
var preciocomida;
var pesosxdias;
var numerodias;
var cheque;
var calculopesos;
var calculohotel;
var calculocomida;

var numerodias=parseInt(prompt("Ingrese la cantidad de días que se irá a la ciudad de Monterrey."));
var preciohotel=parseInt(prompt("Ingrese el precio del hotel por día en pesos."));
var preciocomida=parseInt(prompt("Ingrese el precio de la comida por día en pesos."));

var calculopesos=numerodias*100;
var calculohotel=preciohotel*numerodias;
var calculocomida=preciocomida*numerodias;
var cheque= calculocomida+calculohotel+calculopesos;

document.write("El valor de la comida es de ",calculocomida," pesos, el precio del hotel es de ",calculohotel," pesos y el dinero diario a entregar es de ",calculopesos, " pesos. <br>");
document.write("El valor dl cheque tiene que ser de ",cheque," pesos.")