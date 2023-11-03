const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
  if (isNaN(num) || num <= 0) {
    console.log('introduce un número válido');
  } else {
    let contador = 0;

    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0) {
        console.log(i);
        contador++;
      }
    }
    console.log(`Hay ${contador} múltiplos de 3 desde 1 hasta ${num}.`);
  }

  rl.close();
});

