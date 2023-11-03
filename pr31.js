const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Primo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function Factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * Factorial(numero - 1);
  }
}

function Tabla(numero) {
  console.log(`Tabla de multiplicar de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}


rl.question('Escribe un numero: ', (numero) => {
  const num = parseInt(numero);

  if (isNaN(num) || num < 1) {
    console.log('Escribe un numero valido');
    rl.close();
  } else {
    console.log(`Operaciones para ${num}:`);
    console.log('1: Comprobar si es primo');
    console.log('2: Calcular factorial');
    console.log('3: Mostrar tabla de multiplicar');

    rl.question('Selecciona una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
          if (Primo(num)) {
            console.log(`${num} es un numero primo.`);
          } else {
            console.log(`${num} no es un numero primo.`);
          }
          break;
        case '2':
          console.log(`El factorial de ${num} es: ${Factorial(num)}`);
          break;
        case '3':
          Tabla(num);
          break;
        default:
          console.log('Opción no válida.');
      }

      rl.close();
    });
  }
});

