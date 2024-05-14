
/* Actividad estrcuturas repetitivas de control*/
/* practica avamnzada de funciones*/
 /*

let totalApagar = 0; //Inicialización dela variable

for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    let cantidad = Number(prompt("¿Cuánto desea llevar?"));
    let precio = Number(prompt("¿Cuál es su precio?"));

    const subtotal = cantidad * precio;
    totalApagar += subtotal;
}

console.log(+ totalApagar)

*/

const comprar = ()=> {
    let totalApagar = 0
    for (let index = 1; index <= 3; index++) {
        const nombre =prompt("¿Qué producto desea llevar?");
        const cantidad =Number(prompt("¿Cuántos desea llevar?"));
        const precio =Number(prompt("¿Cuál es su precio?"));
        const subtotal = cantidad * precio;
        totalApagar = totalApagar + subtotal;
    }
    console.log("El total es " + totalApagar);
    return totalApagar;
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;

const totall = comprar () + comprar() + comprar();



