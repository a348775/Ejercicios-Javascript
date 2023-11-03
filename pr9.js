const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
  if (isNaN(num)) {
    console.log('Introduce un número válido.');
  } else if (num > 0) {
    console.log('El número es positivo.');
  } else if (num < 0) {
    console.log('El número es negativo.');
  } else {
    console.log('El número es cero.');
  }

  rl.close();
});

