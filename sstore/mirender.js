// barra de navegacion


// Obtener el elemento del header
const header = document.querySelector('header');

// Crear el logo
const logoLink = document.createElement('a');
logoLink.href = './index.html';
logoLink.classList.add('header-logo');

const logoImg = document.createElement('img');
logoImg.classList.add('header-logo-img');
logoImg.src = './assets/tiendamia-logo.svg';
logoImg.width = '218';
logoImg.alt = 'Logo store';

logoLink.appendChild(logoImg);
header.appendChild(logoLink);

// Crear el formulario de búsqueda
const form = document.createElement('form');
form.classList.add('header-form');

const input = document.createElement('input');
input.classList.add('header-input');
input.type = 'text';
input.placeholder = 'Search';
input.id = 'search';

form.appendChild(input);
header.appendChild(form);
// Agregar un fondo de color al header
header.style.backgroundColor = 'lightblue';

// Crear la lista de redes sociales
const socialList = document.createElement('ul');
socialList.classList.add('header-social');

const socialItems = [
  { id: 'facebook', href: 'https://facebook.com', imgSrc: 'data:image/png;base64,...' },
  { id: 'instagram', href: 'https://instagram.com', imgSrc: 'data:image/png;base64,...' },
  { id: 'cart', href: './cart.html', imgSrc: 'data:image/png;base64,...' }
];

socialItems.forEach(item => {
  const li = document.createElement('li');
  li.id = item.id;
  li.classList.add('header-li');

  const link = document.createElement('a');
  link.classList.add('header-a');
  link.href = item.href;

  const img = document.createElement('img');
  img.classList.add('header-social-img');
  img.src = item.imgSrc;

  link.appendChild(img);
  li.appendChild(link);

  socialList.appendChild(li);
});

header.appendChild(socialList);

//NAV

const navSelector = document.getElementById("navbar");

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Cómo comprar", linkTo: "./how.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

for (let option of options) {
  const listItem = document.createElement("li"); // Crear elemento <li>
  const anchor = document.createElement("a"); // Crear elemento <a>
  anchor.className = "nav-a"; // Asignar clase al enlace
  anchor.textContent = option.title; // Asignar texto al enlace
  anchor.href = option.linkTo; // Asignar el atributo href al enlace

  // Estilos para los enlaces
  anchor.style.display = "block";
  anchor.style.padding = "10px 20px";
  anchor.style.color = "white";
  anchor.style.textDecoration = "none";

  // Cambio de color de fondo al pasar el mouse sobre los enlaces
  anchor.addEventListener("mouseover", function () {
    anchor.style.backgroundColor = "#555";
  });

  // Restablecer el color de fondo cuando el mouse deja el enlace
  anchor.addEventListener("mouseout", function () {
    anchor.style.backgroundColor = "";
  });
  listItem.appendChild(anchor); // Agregar el enlace al elemento <li>
  navSelector.appendChild(listItem); // Agregar el elemento <li> al menú de navegación
}

// Estilos para la lista de navegación
navSelector.style.listStyleType = "none";
navSelector.style.padding = "0";
navSelector.style.margin = "0";
navSelector.style.backgroundColor = "#333";
navSelector.style.display = "flex";

