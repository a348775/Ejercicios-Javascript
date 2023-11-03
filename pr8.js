const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Entrada() {
  rl.question('Introduce Si o No: ', (resp) => {
    if (resp.toUpperCase() === 'SI' || resp.toUpperCase() === 'S' || resp.toUpperCase() === 'NO'|| resp.toUpperCase() === 'N') {
      console.log(`Has introducido: ${resp.toUpperCase()}`);
      rl.close();
    } else {
      console.log('Introduce solo Si o No');
      Entrada();
    }
  });
}

Entrada();

