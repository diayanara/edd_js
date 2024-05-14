
/*ejercicio de operadors*/

/*
const dato1 = Number(prompt("ingrese primer número"));
const dato2 = Number(prompt("Ingrese segundo número"));

const suma =dato1 +dato2;

const mensajeSuma = "El resultado de la suma es  "+suma;

alert(mensajeSuma)

const saludo = "Que gusto!";

alert(saludo)

const hola = prompt( "¿Cuál es tu nombre?");

console.log(hola);

alert("Preparado  " + hola + "?");

alert("Ahora resuelve esto ...")

*/

/* actividad de estructuras de control repetitivas*/

const cantidad = Number(prompt("¿Cuántos números desea sumar?"))

let sumatoria = 0

for (let index = 1; index <= cantidad; index++) {
    const numeroAsumar = Number(prompt("Ingrese un numero a sumar"));
    sumatoria = sumatoria + numeroAsumar

}

console.log("La Suma total es " + sumatoria)

