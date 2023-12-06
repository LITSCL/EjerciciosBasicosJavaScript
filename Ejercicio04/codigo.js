'use strict';

function calcularVenta() {
  var precioSinIVA = parseInt(document.getElementById("precioSinIVA").value);

  if (precioSinIVA > 300000) {
    precioSinIVA = precioSinIVA * 0.90;
  }

  var precioConIVA = precioSinIVA * 1.19;
  console.log(precioConIVA);
}
