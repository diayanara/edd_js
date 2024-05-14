

class Persona {
    constructor(nombre,vida) {
        this.nombre = nombre
        this.vida = vida

    }
    comer(cantidad) {
        this.vida = this.vida + cantidad
        console.log("la vida de "+this.nombre+" acaba de aumentar a: "+this.vida);
    }
    entrenar(cantidad) {
        this.vida = this.vida - cantidad
        console.log("la vida de "+this.nombre+" acaba de disminuir por entrenamiento");
    }

}

const maria = new Persona("Maria",100)
const marta = new  Persona("Marta",120)

console.log(maria);
console.log(marta);

maria.comer(10)
maria.comer(50)
maria.comer(5)
maria.entrenar(30)

marta.comer(20)
marta.entrenar(50)
marta.comer(40)
