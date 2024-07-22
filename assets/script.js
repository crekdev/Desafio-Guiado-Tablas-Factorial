//Se define variable numero ingresado
let numeroIngresado;

//Se valida que sea un numero entre 1 y 20 y que sea un número
const validaNumber = function () {
  do {
    numeroIngresado = parseInt(prompt("Ingresa un número entre el 1 y 20"));
    if (numeroIngresado < 1 || numeroIngresado > 20) {
      alert("Fuera de Rango");
    }
  } while (numeroIngresado < 1 || numeroIngresado > 20 || Number.isInteger(numeroIngresado) != true);

  return
}

//Función cacula e imprime factorial
const factorial = function (numeroIngresado) {
  let factorialNum = 1;
  for (let i = 1; i <= numeroIngresado; i++) {
    factorialNum *= i;
    console.log("El factorial de: " + i + " es: " + factorialNum + "  ");
  }
  return;
}

//Función cacula e imprime tablas
const tabla = function (numeroIngresado) {
  for (let i = 1; i <= numeroIngresado; i++) {
    console.log(i + " x " + numeroIngresado + " = " + (i * numeroIngresado) + "  ");
  }
  return
}

//Funcion principal
const main = function () {
  validaNumber();
  tabla(numeroIngresado);
  factorial(numeroIngresado);
}

//Ejecución de programa
main();


