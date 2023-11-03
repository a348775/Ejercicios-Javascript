const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una frase: ', (frase) => {
  const terminalAncho = process.stdout.columns;
  const espaciosAntes = Math.floor((terminalAncho - frase.length) / 2);
  const espacios = ' '.repeat(espaciosAntes);

  console.log(espacios + frase);
  
  rl.close();
});

