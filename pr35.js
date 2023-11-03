function NumAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function generarMatriz() {
  const matriz = [];
  for (let i = 0; i < 4; i++) {
    const fila = [];
    for (let j = 0; j < 5; j++) {
      fila.push(NumAleatorio());
    }
    matriz.push(fila);
  }
  return matriz;
}

const matrizAleatoria = generarMatriz();

for (let i = 0; i < matrizAleatoria.length; i++) {
  console.log(matrizAleatoria[i].join(' '));
}

