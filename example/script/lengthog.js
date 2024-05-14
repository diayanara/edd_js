/*metodos de cadena de texto ejercicio*/

function lenghtOf(text) {
    if (text === "") {
        return "inbvalid input";
    } else {
        return text.length;
    }

    
}

console.log(lenghtOf("buenas buenas"))
console.log(lenghtOf(""))
console.log(lenghtOf("es complicado estudiar, ser mamá y no lucir como un vejestorio"))


function lenghtOff(text) {
    return text !== "" ? text.length : "Invalido";
}

console.log(lenghtOff(""))
console.log(lenghtOff("espero que ya no se ponga más complicado"))
console.log(lenghtOff("Es hora de comprar ropa"))

