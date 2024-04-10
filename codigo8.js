var distancia;
var velocidad;
var tiempo;


var distancia=parseInt(prompt("Ingresar la distancia entre el punto de inicio y el destino en km."));
var velocidad=parseFloat(prompt("Ingrese la velocidad en km/h"));

var tiempo=distancia/velocidad;

document.write("El tiempo que te llevaria recorrer ",distancia,"km a una velocidad de ",velocidad,"km/h seria de ",tiempo, "hs.")