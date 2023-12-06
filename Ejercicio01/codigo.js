'use strict';

var largo = parseInt(prompt("Ingrese el largo del rectangulo")); //Se lee un string y se refunde a int.
var ancho = parseInt(prompt("Ingrese el ancho del rectangulo")); //Se lee un string y se refunde a int.

document.write("El area del rectangulo es: " + (largo * ancho)); //Imprime en consola el area del rectangulo concatenado con texto.
document.write("<br>"); //Se imprime esta etiqueta para hacer un salto de línea.
document.write("El perimetro del rectangulo es: " + (largo * 2 + ancho * 2)); //Imprime en consola el perimetro del rectangulo concatenado con texto.


