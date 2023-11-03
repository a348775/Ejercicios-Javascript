const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe el primer numero: ', (numero1) => {
  rl.question('Escribe el segundo numero: ', (numero2) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Escribe numeros validos.');
      rl.close();
    } else {
      console.log('Seleccione la operación:');
      console.log('1. Suma');
      console.log('2. Resta');
      console.log('3. Multiplicacion');
      console.log('4. Division');

      rl.question('Opcion: ', (opcion) => {
        switch (opcion) {
          case '1':
            console.log(`La suma es: ${num1 + num2}`);
            break;
          case '2':
            console.log(`La resta es: ${num1 - num2}`);
            break;
          case '3':
            console.log(`La multiplicacion es: ${num1 * num2}`);
            break;
          case '4':
            if (num2 !== 0) {
              console.log(`La division es: ${num1 / num2}`);
            } else {
              console.log('No se puede dividir entre cero');
            }
            break;
          default:
            console.log('Opción no valida');
        }

        rl.close();
      });
    }
  });
});

