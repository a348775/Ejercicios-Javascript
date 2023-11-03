const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const registroSize = 150;

function agregarRegistro(id, nombre, apellidos, direccion, estado) {
  const buffer = Buffer.alloc(registroSize);
  
  buffer.write(id.toString().padEnd(10), 0); // ID (10 bytes)
  buffer.write(nombre.padEnd(30), 10); // NOMBRE (30 bytes)
  buffer.write(apellidos.padEnd(50), 40); // APELLIDOS (50 bytes)
  buffer.write(direccion.padEnd(40), 90); // DIRECCIÓN (40 bytes)
  buffer.write(estado.padEnd(20), 130); // ESTADO (20 bytes)
  
  fs.open('DATOS.DAT', 'a', (err, fd) => {
    if (err) {
      console.error('Error al abrir el archivo:', err);
      return;
    }

    fs.write(fd, buffer, 0, buffer.length, null, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo:', err);
      } else {
        console.log('Registro agregado correctamente.');
      }

      fs.close(fd, (err) => {
        if (err) {
          console.error('Error al cerrar el archivo:', err);
        }
      });
    });
  });
}

rl.question('ID: ', (id) => {
  rl.question('NOMBRE: ', (nombre) => {
    rl.question('APELLIDOS: ', (apellidos) => {
      rl.question('DIRECCIÓN: ', (direccion) => {
        rl.question('ESTADO: ', (estado) => {
          agregarRegistro(id, nombre, apellidos, direccion, estado);
          rl.close();
        });
      });
    });
  });
});

