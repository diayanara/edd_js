
/*Actividad de POO I*/

class Product {
    constructor (id,tittle,price,stock,images,onsale,supplier) {
        this.id = id
        this.tittle = tittle
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this._supplier = supplier

    }
    get getSupplier() {
        return this._supplier
    }
    set setSupplier(newName) {
        this._supplier = newName;
    }
}

const prod4 = new Product("lk45","Billetera",80,20,"https://cdn.pixabay.com/photo/2018/07/19/07/17/wallet-3548021_960_720.jpg",true, "Provedor A")

console.log(prod4.getSupplier)
prod4.setSupplier = "Nuevo Proveedor";
console.log(prod4.getSupplier)