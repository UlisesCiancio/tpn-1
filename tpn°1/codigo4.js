var cobro;
var horas;
var cuenta;

var cobro= parseInt(prompt("Ingrese el cobro por horas en pésos."));
var horas=parseInt(prompt("Ingrese las horas trabajadas."));

var cuenta=cobro*horas;

document.write("El empleado ganaría ",cuenta," pesos.")