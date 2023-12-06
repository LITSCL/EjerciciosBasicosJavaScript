'use strict';
function calcular() {
  var horasAcademicas = parseInt(document.getElementById("HorasAcademicas").value);
  var minutos = horasAcademicas * 45;
  var horasDeReloj = minutos / 60;
  document.write("horas de reloj" + " = " + Math.trunc(horasDeReloj));
}
