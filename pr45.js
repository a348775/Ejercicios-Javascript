const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const registroSize = 150;

// Función para obtener un registro por ID
function obtenerRegistroPorID(id) {
  // Leer el contenido actual del archivo
  fs.readFile('DATOS.DAT', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    // Dividir el contenido en registros
    const registros = data.toString().match(new RegExp(`.{1,${registroSize}}`, 'g')) || [];

    // Obtener el registro con el ID proporcionado
    const registro = registros.find(registro => registro.slice(0, 10).trim() === id);

    // Mostrar el registro encontrado
    if (registro) {
      console.log(`Registro con ID "${id}":`);
      console.log(registro);
    } else {
      console.log(`No se encontró un registro con ID "${id}".`);
    }
  });
}

// Pedir al usuario que ingrese el ID para buscar el registro
rl.question('Ingrese el ID para buscar el registro: ', (id) => {
  // Obtener el registro por el ID proporcionado
  obtenerRegistroPorID(id);
  rl.close();
});

