function NumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function generarMatriz() {
  const matriz = [];
  for (let i = 0; i < 4; i++) {
    const fila = [];
    for (let j = 0; j < 5; j++) {
      fila.push(NumeroAleatorio());
    }
    matriz.push(fila);
  }
  return matriz;
}

function MatrizTranspuesta(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const transpuesta = [];
  for (let j = 0; j < columnas; j++) {
    const filaTranspuesta = [];
    for (let i = 0; i < filas; i++) {
      filaTranspuesta.push(matriz[i][j]);
    }
    transpuesta.push(filaTranspuesta);
  }
  return transpuesta;
}

const matrizOriginal = generarMatriz();

console.log("Matriz Original:");
for (let i = 0; i < matrizOriginal.length; i++) {
  console.log(matrizOriginal[i].join(' '));
}

const matrizTranspuesta = MatrizTranspuesta(matrizOriginal);
console.log("\nMatriz Transpuesta:");
for (let i = 0; i < matrizTranspuesta.length; i++) {
  console.log(matrizTranspuesta[i].join(' '));
}

