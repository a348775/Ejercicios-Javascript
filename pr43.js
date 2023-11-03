const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const registroSize = 150;

function modificarRegistro(id, modificaciones) {
  fs.readFile('DATOS.DAT', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    const registros = data.toString().match(new RegExp(`.{1,${registroSize}}`, 'g')) || [];
    const indice = registros.findIndex(registro => registro.slice(0, 10).trim() === id.toString().trim());

    if (indice !== -1) {
      const registroModificado = `${id.toString().padEnd(10)}${modificaciones.nombre.padEnd(30)}${modificaciones.apellidos.padEnd(50)}${modificaciones.direccion.padEnd(40)}${modificaciones.estado.padEnd(20)}`;
      registros[indice] = registroModificado;

      const nuevoContenido = registros.join('');

      fs.writeFile('DATOS.DAT', nuevoContenido, (err) => {
        if (err) {
          console.error('Error al escribir en el archivo:', err);
        } else {
          console.log('Registro modificado correctamente.');
        }
      });
    } else {
      console.log('Registro no encontrado.');
    }
  });
}

rl.question('Ingrese el ID del registro que desea modificar: ', (id) => {
  rl.question('Nuevo NOMBRE: ', (nombre) => {
    rl.question('Nuevos APELLIDOS: ', (apellidos) => {
      rl.question('Nueva DIRECCIÓN: ', (direccion) => {
        rl.question('Nuevo ESTADO: ', (estado) => {
          const modificaciones = { nombre, apellidos, direccion, estado };
          modificarRegistro(id, modificaciones);
          rl.close();
        });
      });
    });
  });
});

