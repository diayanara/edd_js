
/*Esjercicio de iniciando funciones*/

/*
function calcularVelocidad(distancia,tiempo) {
    //const distancia = 10
    //const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
}

calcularVelocidad(10,2)
calcularVelocidad(1000,10)
calcularVelocidad(80,6)

*/

const calcularVel = (distancia,tiempo) => {
    const velocidad = distancia/tiempo;
    console.log("Es " + velocidad);
    return velocidad
}

const velocidad1 = calcularVel(15,3);
console.log("Sale " + velocidad1)
const velocidad2 = calcularVel(45,32);
const velocidad3 = calcularVel(458,3);