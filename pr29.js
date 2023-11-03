function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

let contador = 0;

for (let i = 0; i < 100; i++) {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  
  if (dado1 + dado2 === 10) {
    contador++;
  }
}

console.log(`La suma de los dos dados fue 10:  ${contador} veces`);

