//ejercicio

//FOR EACH
const nombres = ["Carlos", "Camilo", "Bryan", "Nahuel", "Amaterasu"];

let cadena = "";
nombres.forEach((cadaElemento) => {
  console.log(cadaElemento);
  console.log(cadaElemento + "  Es miembro de EEG. ");
  const frase = cadaElemento + "  pertenece a EEG. ";
  cadena = cadena + frase;
});

console.log(cadena);

//MAP

const nombresTransformados = nombres.map((cadaElemento) => {
  cadaElemento = cadaElemento.toUpperCase();
  cadaElemento = "Miembro de EGG: " + cadaElemento;
  return cadaElemento;
});

console.log(nombresTransformados);

//FILTER

const filtrado = nombres.filter((cadaElemento) => cadaElemento.includes("Na"));
console.log(filtrado);
