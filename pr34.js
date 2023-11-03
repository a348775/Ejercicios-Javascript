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
        buscarNota();
      }
    } else {
      console.log('Escribe una calificación válida (0-10)');
      pedirCalificacion(materia);
    }
  });
}

function buscarNota() {
  rl.question('Introduce la nota que quieres buscar: ', (notaBuscar) => {
    const nota = parseFloat(notaBuscar);
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
      if (calificaciones.includes(nota)) {
        console.log(`La nota ${nota} está en la lista de calificaciones.`);
      } else {
        console.log(`La nota ${nota} no está en la lista de calificaciones.`);
      }
      rl.close();
    } else {
      console.log('Por favor, introduce una nota válida entre 0 y 10.');
      buscarNota();
    }
  });
}

console.log('Escribe las calificaciones para las 10 materias:');
pedirCalificacion('materia 1');

