const numPaginas = 3;
const numFilas = 4;
const numColumnas = 5;
let valor = 1;

const tabla = [];

for (let pagina = 1; pagina <= numPaginas; pagina++) {
  const paginaActual = [];
  for (let fila = 1; fila <= numFilas; fila++) {
    const filaActual = [];
    for (let columna = 1; columna <= numColumnas; columna++) {
      filaActual.push(valor);
      valor++;
    }
    paginaActual.push(filaActual);
  }
  tabla.push(paginaActual);
}

for (let pagina = 0; pagina < numPaginas; pagina++) {
  console.log(`Página ${pagina + 1}:`);
  for (let fila = 0; fila < numFilas; fila++) {
    console.log(tabla[pagina][fila].join('\t'));
  }
  console.log('\n');
}

