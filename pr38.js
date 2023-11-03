function OrdenarMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  let intervalo = Math.floor(filas / 2);

  while (intervalo > 0) {
    for (let i = intervalo; i < filas; i++) {
      const temp = matriz[i];
      let j = i;
      while (j >= intervalo && matriz[j - intervalo][0] > temp[0]) {
        matriz[j] = matriz[j - intervalo];
        j -= intervalo;
      }
      matriz[j] = temp;
    }
    intervalo = Math.floor(intervalo / 2);
  }

  return matriz;
}

const matriz = [
  [5, 3, 9],
  [2, 8, 1],
  [7, 4, 6],
  [1, 2, 3]
];

const matrizOrdenada = OrdenarMatriz(matriz);

console.log("Matriz ordenada por la primera columna:");
for (let i = 0; i < matrizOrdenada.length; i++) {
  console.log(matrizOrdenada[i].join(' '));
}

