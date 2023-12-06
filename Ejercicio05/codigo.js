'use strict';

function revisar() {
  var numero = parseInt(document.getElementById("numero").value);

  if (numero < 0) {
    console.log("El número es negativo");
  }
  else if (numero > 0) {
    console.log("El número es positivo");
  }
  else {
    console.log("El número es 0");
  }
}
