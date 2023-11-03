function Factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
}

//para calcular el factorial de otro numero
//borre el que esta debajo y ponga el que
const num = 4;
const factorial = Factorial(num);

console.log(`El factorial de ${num} es ${factorial}`);

