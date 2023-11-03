function CalificacionAleatoria() {
  return Math.floor(Math.random() * 100) + 1;
}

function CalificacionesAlumnos(numAlumnos) {
  const calificaciones = [];
  for (let i = 0; i < numAlumnos; i++) {
    calificaciones.push(CalificacionAleatoria());
  }
  return calificaciones;
}

function cargarCalificaciones(numMaterias, numAlumnosPorMateria) {
  const escuela = {};
  for (let i = 1; i <= numMaterias; i++) {
    const materia = {};
    materia["calificaciones"] = CalificacionesAlumnos(numAlumnosPorMateria);
    escuela[`Materia${i}`] = materia;
  }
  return escuela;
}

const numMaterias = 3;
const numAlumnosPorMateria = 5;

const calificacionesEscuela = cargarCalificaciones(numMaterias, numAlumnosPorMateria);

console.log("Calificaciones de los alumnos de la escuela:");
for (const materia in calificacionesEscuela) {
  console.log(`Materia:  ${materia}: ${calificacionesEscuela[materia].calificaciones.join(', ')}`);
}

