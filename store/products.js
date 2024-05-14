/* ejercicio de POO I*/

/*
const producto1 = {
    nombre: "Blazer",
    precio: 80,
    stock: 50,

};

console.log(producto1);

producto1.id = "125896247"
producto1["foto"] = "https://cdn.pixabay.com/photo/2023/09/24/18/16/child-8273549_1280.jpg"

console.log(producto1);

console.log(producto1.nombre)

console.log(producto1["foto"])

*/

class Product {
    constructor (id,tittle,price,stock,images,onsale) {
        this.id = id
        this.tittle = tittle
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale

    }
}

const prod1 = new Product()
const prod2 = new Product("lg450","billetera",55,0,0,0)
const prod3 = new Product (0,0,0,40,"https://cdn.pixabay.com/photo/2018/07/19/07/17/wallet-3548021_960_720.jpg",true)

console.log(prod1)
console.log(prod2)
console.log(prod3)

console.log(prod2.tittle)
console.log(prod3.onsale)

