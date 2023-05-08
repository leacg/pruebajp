  // Aquí creamos la función que toma todos los parámetros que se solicitan.
function calcularPuntaje(nombre, apellido, departamento, puntajeFundamentos, puntajeImperativa, puntajeObjetos, evidenciaFundamentos, evidenciaImperativa, evidenciaObjetos, puntajeIngles, leccionesCT) {
  // Aquí hacemos el cálculo del puntaje técnico.
  var puntajeTecnico = (0.3 * puntajeFundamentos) + (0.5 * puntajeImperativa) + (0.2 * puntajeObjetos);
// Hacemos una verificación de los criterios para aprobar la parte técnica.
  if (puntajeTecnico >= 60 && evidenciaFundamentos && evidenciaImperativa && evidenciaObjetos) {
    var puntajeTecnico = "ok";
  } else if (puntajeTecnico >= 60 && (!evidenciaFundamentos, !evidenciaImperativa, !evidenciaObjetos)) {
    var puntajeTecnico = "necesita examen final";
  } else if (puntajeTecnico >= 50 && puntajeTecnico < 60 && evidenciaFundamentos && evidenciaImperativa && evidenciaObjetos) {
    var puntajeTecnico = "necesita examen final";
  } else {
    var puntajeTecnico = "no aprobado";
  }
  
  // Verificamos el puntaje de inglés para ver si está aprobado o no.
  if (puntajeIngles >= 50) {
    var puntajeIngles = "ok";
  } else {
    var puntajeIngles = "no aprobado";
  }
    // Verificamos el puntaje de competencias tranversales. para ver si está aprobado o no.
  if (leccionesCT === 10) {
    var puntajeCT = "ok";
  } else {
    var puntajeCT = "no aprobado";
  }
  // Verificamos los puntajes individuales para ver si está aprobado o no, es el puntaje final.
  if (puntajeIngles === "ok" && puntajeCT === "ok" && puntajeTecnico === "ok") {
    var puntajeFinal = "aprobado";
  } else {
    var puntajeFinal = "no aprobado";
  }
  // Aquí mostramos los resultados.
  console.log("Hola " + nombre + " " + apellido + "!! El detalle de tu status final es:");
  console.log("En Inglés - " + puntajeIngles + " puntos - " + puntajeIngles);
  console.log("En CT - " + leccionesCT + " puntos - " + puntajeCT);
  console.log("En Técnica - " + puntajeTecnico + " puntos - " + puntajeTecnico);
  console.log("En conclusión, tu status final es " + puntajeFinal + ".");
}
 // Y aquí ejemplificamos como se usaría.
calcularPuntaje("María", "Gómez", "Departamento X", 85, 90, 80, true, true, true, 85, 10);
