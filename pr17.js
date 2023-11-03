const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer numero: ', (Numero1) => {
  rl.question('Introduce el segundo numero: ', (Numero2) => {
    const num1 = parseInt(Numero1);
    const num2 = parseInt(Numero2);

    if (isNaN(num1) || isNaN(num2) || num1 > num2) {
      console.log('introduce dos números válidos');
      rl.close();
      return;
    }

    let contador = 0;
    let sumaMultiplos = 0;

    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        contador++;
        sumaMultiplos += i;
        console.log(i);
      }
    }

    console.log(`Hay ${contador} multiplos de 2.`);
    console.log(`La suma de los multiplos de 2 es: ${sumaMultiplos}.`);

    rl.close();
  });
});

