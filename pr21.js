let Pares = 0;
let Impares = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    Pares += i;
  } else {
    Impares += i;
  }
}

console.log(`Suma de los pares es de : ${Pares}`);
console.log(`Suma de los impares es de : ${Impares}`);

