const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const registroSize = 150;

function listarRegistrosPorEstado(estado) {
  fs.readFile('DATOS.DAT', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    const registros = data.toString().match(new RegExp(`.{1,${registroSize}}`, 'g')) || [];
    const registrosFiltrados = registros.filter(registro => registro.slice(130, 150).trim() === estado);

    if (registrosFiltrados.length > 0) {
      console.log(`Registros con estado "${estado}":`);
      registrosFiltrados.forEach(registro => {
        console.log(registro);
      });
    } else {
      console.log(`No se encontraron registros con estado "${estado}".`);
    }
  });
}

rl.question('Ingrese el estado para filtrar los registros: ', (estado) => {
  listarRegistrosPorEstado(estado);
  rl.close();
});

