const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calificaciones = [];
function pedirCalificacion(materia) {
  rl.question(`Escribe la calificación para ${materia}: `, (calificacion) => {
    const nota = parseFloat(calificacion);
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
      calificaciones.push(nota);
      if (calificaciones.length < 10) {
        pedirCalificacion(`materia ${calificaciones.length + 1}`);
      } else {
        calcularPromedio();
      }
    } else {
      console.log('Escribe una calificación válida (0-10)');
      pedirCalificacion(materia);
    }
  });
}

function calcularPromedio() {
  const sumaCalificaciones = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
  const promedio = sumaCalificaciones / calificaciones.length;
  console.log(`Las calificaciones del alumno son: ${calificaciones.join(', ')}`);
  console.log(`El promedio del alumno es de : ${promedio.toFixed(2)}`);
  rl.close();
}

console.log('Escribe las calificaciones para las 10 materias:');
pedirCalificacion('materia 1');

