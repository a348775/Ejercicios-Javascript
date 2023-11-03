const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer numero: ', (Numero1) => {
  rl.question('Introduce el segundo numero: ', (Numero2) => {
    const num1 = parseInt(Numero1);
    const num2 = parseInt(Numero2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('introduce numeros validos');
      rl.close();
      return;
    }

    let contador = 0;
    let contadorPares = 0;
    let sumaImpares = 0;

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      contador++;
      if (i % 2 === 0) {
        contadorPares++;
      } else {
        sumaImpares += i;
      }
      console.log(i);
    }

    // Imprimir resultados
    console.log(`Hay ${contador} numeros naturales entre ${num1} y ${num2}.`);
    console.log(`Hay ${contadorPares} numeros pares.`);
    console.log(`La suma de los numeros impares es: ${sumaImpares}.`);

    rl.close();
  });
});

