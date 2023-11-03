const numeros = Array.from({ length: 10 }, (_, index) => index + 1);

for (let i = 0; i < 10; i++) {
  console.log(`${numeros.join(', ')}`);
}

