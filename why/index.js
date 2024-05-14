/*
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
 */

/*
let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma += i;
}

console.log("Es: ", suma);

*/

/*
const array = ["a","b","c","d","e"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

*/



function sumar(num1, num2) {
  const resultado = num1 + num2;
  console.log("el resultado de la suma es " + resultado);
  return resultado;
}

const primerSuma = sumar(10, 20);
console.log(primerSuma);
const segunSuma = sumar(1, 100);
console.log(segunSuma);
const tercSuma = sumar(-100, 9);
console.log(tercSuma);

const sumaTotal = primerSuma + segunSuma + tercSuma;
console.log("El resultado total es " + sumaTotal);

const imprimirResultado = (num1, num2, operacion) => {
  if (operacion === "sumar") {
    const suma = num1 + num2;
    console.log("El resultado de la suma es: " + suma);
    return suma;
  } else if (operacion === "restar") {
    const resta = num1 - num2;
    console.log("El resultado de la resta es: " + resta);
    return resta;
  }
};
imprimirResultado(10, 20, "sumar");
imprimirResultado(10, 20, "restar");

const imprimirNumero = (numero) => console.log(numero);

imprimirNumero(20);
imprimirNumero(100);
imprimirNumero(-50);
