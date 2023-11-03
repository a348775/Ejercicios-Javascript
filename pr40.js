function generarVentas() {
  const ventas = [];
  for (let representante = 1; representante <= 3; representante++) {
    for (let mes = 1; mes <= 12; mes++) {
      for (let producto = 1; producto <= 4; producto++) {
        const venta = {
          representante,
          mes,
          producto,
          monto: Math.floor(Math.random() * 1000) + 1,
        };
        ventas.push(venta);
      }
    }
  }
  return ventas;
}

function TotalVentas(ventas) {
  const totalPorMesProducto = {};
  const totalPorProducto = {};

  for (const venta of ventas) {
    const { mes, producto, monto } = venta;

    if (!totalPorMesProducto[mes]) {
      totalPorMesProducto[mes] = {};
    }

    if (!totalPorMesProducto[mes][producto]) {
      totalPorMesProducto[mes][producto] = 0;
    }

    if (!totalPorProducto[producto]) {
      totalPorProducto[producto] = 0;
    }

    totalPorMesProducto[mes][producto] += monto;
    totalPorProducto[producto] += monto;
  }

  return { totalPorMesProducto, totalPorProducto };
}

const ventas = generarVentas();

const { totalPorMesProducto, totalPorProducto } = TotalVentas(ventas);

console.log("Ventas por mes y producto:");
console.log(totalPorMesProducto);
console.log("Ventas totales por producto en un año:");
console.log(totalPorProducto);

