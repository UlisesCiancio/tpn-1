var catetoI;
var catetoA;
var hipotenusa;
var cuenta;

var catetoI=parseInt(prompt("Ingrese el valor del catéto izquierdo en cm."));
var catetoA=parseInt(prompt("Ingrese el valor del cateto de abajo."));

var hipotenusa=(catetoI* catetoI)+(catetoA*catetoA);
var cuenta=(hipotenusa*hipotenusa);

document.write("La hipotenusa es de ",cuenta," metros");
