const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const registroSize = 150;

function eliminarRegistro(id) {
  fs.readFile('DATOS.DAT', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    const registros = data.toString().match(new RegExp(`.{1,${registroSize}}`, 'g')) || [];
    const indice = registros.findIndex(registro => registro.slice(0, 10).trim() === id.toString().trim());

    if (indice !== -1) {
      registros.splice(indice, 1);
      const nuevoContenido = registros.join('');

      fs.writeFile('DATOS.DAT', nuevoContenido, (err) => {
        if (err) {
          console.error('Error al escribir en el archivo:', err);
        } else {
          console.log('Registro eliminado correctamente.');
        }
      });
    } else {
      console.log('Registro no encontrado.');
    }
  });
}

rl.question('Ingrese el ID del registro que desea eliminar: ', (id) => {
  // Eliminar el registro con el ID proporcionado
  eliminarRegistro(id);
  rl.close();
});

