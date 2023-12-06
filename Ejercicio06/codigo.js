'use strict';

var precioVenta = parseInt(prompt("Ingrese un número"));
var descuento;
if (precioVenta > 500000) {
  precioVenta = precioVenta * 0.90;
  descuento = precioVenta * 0.10;
}
else {
  precioVenta=precioVenta * 0.95;
  descuento=precioVenta * 0.05;
}

precioVenta = precioVenta * 1.19;

document.write("Valor total de la venta: " + precioVenta + "<br/>");
document.write("Se aplicó un descuento de: " + descuento);
