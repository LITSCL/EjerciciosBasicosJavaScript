'use strict';

function compararNumeros() {
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);

  if (numero1 < numero2) {
    document.write(numero1 + " es menor que " + numero2);
  }
  else{
    document.write(numero1 + " es mayor que " + numero2);
  }

}
