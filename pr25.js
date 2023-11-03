const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe un numero menor de 5000: ', (numero) => {
  const num = parseInt(numero);
  if (num < 1 || num >= 5000 || isNaN(num)) {
    console.log('Escribe un numero valido');
  } else {
    const unidades = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    const decenas = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    const centenas = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    const miles = ['','M','MM','MMM', 'IV_']; 
    //El 4000 en romano se escribe IV con una rayita encima del numero
    // en el codigo represento esa rayita como un guion bajo (No encontre el simbolo perdon :c)

    const unidadesR = unidades[num % 10];
    const decenasR = decenas[Math.floor((num % 100) / 10)];
    const centenasR = centenas[Math.floor((num % 1000) / 100)];
    const milesR = miles[Math.floor((num % 10000) / 1000)];

    const numeroRomano = milesR + centenasR + decenasR + unidadesR;
    console.log(`El numero que intoduciste se escribe: ${numeroRomano} en romano`);
  }
  rl.close();
});

