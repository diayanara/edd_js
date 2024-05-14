//ejeercicio video

const arreglo = ["primer", 2, "hola", { name: "Eggsy" }, true];

const edades = [20, 30, 15, 36, 40];

console.log("RPIMER ELEMENTO DE UN ARRAY: " + arreglo[0]);
console.log("RPIMER ELEMENTO DE UN ARRAY: " + arreglo[1]);
console.log("RPIMER ELEMENTO DE UN ARRAY: " + arreglo[3]);
console.log("RPIMER ELEMENTO DE UN ARRAY: " + arreglo[arreglo.length - 1]);

for (let i= 0; i< edades.length-1; i++) {
    console.log(edades [i])
    console.log("edad de la persona es " + edades[i])
}

for (let edad of edades) {
    console.log("la edad con for of es: " +edad);

}

for (let cadaElemento of arreglo) {
    console.log(cadaElemento)
}
