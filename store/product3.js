/*Actividad tambien y ultima de POO I*/

class Product {
    constructor(id,tittle,price,stock,images, onsale) {
        this.id = id
        this.tittle = tittle
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
    }

    sellUnits(units) {
        this.stock = this.stock - units
        console.log("El stock de "+this.tittle+" acaba de disminuir en "+this.stock+"")
    } 

    sellUnits(units) {
        if (this.stock >= units) {
            this.stock -= units;
            console.log("se vendieron "+units+" unidades de " +this.tittle+". Stock restante: " +this.stock);
        } else {
            console.log("No hay suficiente stock disponible " +units+ "unidades de "+this.tittle+".");
        }
    }

    
}

const prod5 = new Product("ak143", "Colchon", 800, 12,"https://cdn.pixabay.com/photo/2018/07/19/07/17/wallet-3548021_960_720.jpg", true)


console.log(prod5);

prod5.sellUnits(10)
prod5.sellUnits(5)

