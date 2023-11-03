const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una frase: ', (frase) => {
  rl.question('Escribe la letra que quieres contar: ', (letra) => {
    const Fminusculas = frase.toLowerCase();
    const Lminuscula = letra.toLowerCase();
    
    let contador = 0;

    for (let i = 0; i < Fminusculas.length; i++) {
      if (Fminusculas[i] === Lminuscula) {
        contador++;
      }
    }

    console.log(`La letra "${letra}" aparece ${contador} veces en la frase`);
    rl.close();
  });
});

