const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

function Frases() {
  rl.question("Escribe una frase (Escribe 'fin' para terminar): ", (frase) => {
    if (frase.toLowerCase() === 'fin') {
      console.log(`Has introducido ${contador} frase(s)`);
      rl.close();
    } else {
      contador++;
      Frases();
    }
  });
}

Frases();

