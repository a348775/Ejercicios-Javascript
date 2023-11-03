const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let horas = 0;
let minutos = 0;
let segundos = 0;

function imprimirHora() {
  console.log(`Hora actual: ${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);
}


function Horario() {
  rl.question('Escribe la horas: ', (h) => {
    rl.question('Escribe los minutos: ', (m) => {
      rl.question('Escribe los segundos: ', (s) => {
        horas = parseInt(h) % 24;
        minutos = parseInt(m) % 60;
        segundos = parseInt(s) % 60;
        imprimirHora();
        
        setInterval(() => {
          segundos++;
          if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
              minutos = 0;
              horas++;
              if (horas === 24) {
                horas = 0;
              }
            }
          }
          imprimirHora();
        }, 1000);

        rl.close();
      });
    });
  });
}
Horario();

