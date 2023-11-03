const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe un numero entre 0 y 10: ', (numero) => {
  const num = parseInt(numero);
  
  if (num < 0 || num > 10 || isNaN(num)) {
    console.log('escribe un numero valido');
  } else {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 0; i <= 10; i++) {
      const resultado = num * i;
      console.log(`${num} x ${i} = ${resultado}`);
    }
  }
  
  rl.close();
});

