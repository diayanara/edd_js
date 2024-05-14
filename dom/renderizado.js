const h1Selector = document.getElementById("titulo");
console.log(h1Selector);
console.log(h1Selector.id);
console.log(h1Selector.className);

const classSelector = document.getElementsByClassName("span-class");
console.log(classSelector);

const tagSelector = document.getElementsByTagName("p");
console.log(tagSelector);

const selector = document.querySelector("h1");
const selector2 = document.querySelector(".span-class");
const selector4 = document.querySelector("#titulo");

// segundas parte

const h2Tag = document.createElement("h2");

h2Tag.textContent = "este es el subtutilo";
h2Tag.style.color = "white";
h2Tag.style.backgroundColor = "gray";
h2Tag.style.fontSize = "30px";
h2Tag.style.padding = "20px";
h2Tag.style.margin = "20px 0";
h2Tag.style.display = "flex";
h2Tag.style.justifyContent = "center";
h2Tag.style.alignItems = "center";
h2Tag.style.width = "500px";
h2Tag.style.height = "200px";

//pretag

const preTag = document.querySelector("#subtitulo");
preTag.appendChild(h2Tag);

const productos = ["celular", "tablet", "computadora"];

const products1Sel = document.querySelector("#products1");

for (let producto of productos) {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "pink";
  h3Tag.style.padding = "10px";
  h3Tag.style.margin = "10px";
  h3Tag.textContent = producto;
  products1Sel.appendChild(h3Tag);
}

const objetos = [
  { nombre: "celular", precio: 100 },
  { nombre: "tablet", precio: 120 },
  { nombre: "computadora", precio: 200 },
];

const products2Sel = document.querySelector("#products2");

objetos.forEach((cadaElemento) => {
  const h3Tag = document.createElement("h3");
  h3Tag.style.backgroundColor = "pink";
  h3Tag.style.padding = "10px";
  h3Tag.style.margin = "10px";
  h3Tag.textContent = `${cadaElemento.nombre.toUpperCase()}  - Precio: ${
    cadaElemento.precio
  }`;
  products2Sel.appendChild(h3Tag);
});

const products3Sel = document.querySelector("#products3");

let templates = "";

// púede ser for each o for of

objetos.forEach((cadaElemento) => {
  cadaElemento = `<h3 style="background-color: crimson; color: antiquewhite; padding: 10px; margin: 10px;">${cadaElemento.nombre}- precio: ${cadaElemento.precio}</h3>`;
  templates = templates + cadaElemento;
});

products3Sel.innerHTML = templates;
