const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;
let numeros = [];

function Nums() {
  rl.question('Introduce un numero: ', (numero) => {
    contador++;
    numeros.push(parseFloat(numero));

    if (contador < 5) {
      Nums();
    } else {
      const mayor = Math.max(...numeros);
      const menor = Math.min(...numeros);
      console.log(`El numero mayor es: ${mayor}`);
      console.log(`El numero menor es: ${menor}`);
      rl.close();
    }
  });
}

Nums();

