let Pares = 0;
let Impares = 0;

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 2 === 0) {
    Pares += i;
  } else {
    Impares += i;
  }
}

console.log('Suma de numeros pares: ' + Pares);
console.log('Suma de numeros impares: ' + Impares);

