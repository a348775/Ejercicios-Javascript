const maximo = 100;
const columnas = 10;

for (let i = 0; i <= maximo; i++) {
  const fila = Math.floor(i / columnas) + 1;
  const columna = i % columnas;

  process.stdout.write(`${i.toString().padStart(3, ' ')} `);

  if (columna === columnas - 1) {
    console.log();
  }
}

