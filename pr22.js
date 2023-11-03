const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una frase: ', (frase) => {
  for (let i = 0; i < 5; i++) {
    let espacios = '    '.repeat(i);
    console.log(espacios + frase);
  }

  rl.close();
});

