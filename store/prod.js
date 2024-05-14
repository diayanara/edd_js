//Actividad ARRAYS

class Product {
    constructor (id,tittle,price,stock,images,onsale,colors,description) {
        this.id = id
        this.tittle = tittle
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this.colors = colors
        this.description = description

    }
}

const prod1 = new Product("prod1", "Product 1", 100, 10, "image1.jpg", false,"blue","beautifull")
const prod2 = new Product("prod2", "Product 2", 150, 5, "image2.jpg", true,"orange","easy")
const prod3 = new Product("prod3", "Product 3", 200, 20, "image3.jpg", false,"pink","marvelous");
const prod4 = new Product("prod4", "Product 4", 120, 8, "image4.jpg", true, "black","awesome");
const prod5 = new Product("prod5", "Product 5", 100, 25, "image5.jpg", true,"yellow","cute");
const prod6 = new Product("prod6", "Product 6", 80, 5, "image6.jpg", true,"red","wow");

const products = [prod1, prod2, prod3, prod4, prod5, prod6];

console.log("Mi array es:");
console.log(products);
console.log(products[1]);
console.log(products[products.length-1])


products.unshift(prod5);
products.push(prod6);
products.shift(0)
products.pop()

console.log(products)




