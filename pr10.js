const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un numero: ', (num) => {
  if (isNaN(num)) {
    console.log('Introduce un numero valido');
  } else {
    if (num % 2 === 0) {
      console.log('Es par');
    } else {
      console.log('Es impar');
    }
  }
  rl.close();
});

