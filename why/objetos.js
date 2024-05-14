

const producto = {
    nombre: "Celular",
    precio: 1000,
    stock: 15,
}

console.log(producto);

producto.id = "001122333abdc"
producto.foto = "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg"
producto["detalle"] = "escribir el detalle del celular"
producto["color"] = "gris"

console.log(producto);

delete producto["id"]
delete producto.detalle

console.log(producto);

console.log(producto.nombre);
console.log(producto["foto"]);