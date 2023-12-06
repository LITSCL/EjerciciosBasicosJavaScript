'use strict';

var evaluacion1 = parseFloat(prompt("Ingrese la nota de su primera evaluación:")); //Se lee un string y se refunde a float.
var evaluacion2 = parseFloat(prompt("Ingrese la nota de su segunda evaluación:")); //Se lee un string y se refunde a float.
var evaluacion3 = parseFloat(prompt("Ingrese la nota de su tercera evaluación:")); //Se lee un string y se refunde a float.
var evaluacion4 = parseFloat(prompt("Ingrese la nota de su cuarta evaluación:")); //Se lee un string y se refunde a float.

var promedio = (evaluacion1 * 0.15 + evaluacion2 * 0.20 + evaluacion3 * 0.25 + evaluacion4 * 0.40);

document.write("El promedio de notas es: " + promedio);



