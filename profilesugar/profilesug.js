//Ejercicio 1

/*
const nombre = "vladimir";

console.log(`!Como Andas, ${nombre}!`);

const edad = 30;

console.log(`Pero con ${edad} tpdavía sos un nene!!`);

const profesion = "marinero";

const ubicacion = "Marruecos";

const hobby = "natación";

// ejercicio 2

let isOnline = false;

const usuario = prompt("¿estás ahí? (SI/NO)").toUpperCase();

if (usuario === "SI" && !isOnline) {
  isOnline = true;
  console.log("Gracias C:");
} else {
  isOnline = false;
  console.log("No mientaaaas");
}

*/

const misDatosFisicos = {
    nombre: "Jezabel",
    edad: 30,
    direccion: {
        calle: "Aj3",
        numero: 56,
        ciudad: "Marruecos",
    },
    altura: 175,
    peso: 65,
    hobby: "escaladora",


}

// Obtener el contenedor div con id perfil
const perfilContainer = document.getElementById('perfil');

// Crear una variable contenidoPerfil utilizando template strings para incluir los datos del objeto en HTML
const contenidoPerfil = `
    <h2>Perfil:</h2>
    <p>Nombre: ${misDatosFisicos.nombre}</p>
    <p>Edad: ${misDatosFisicos.edad}</p>
    <p>Dirección: ${misDatosFisicos.direccion.calle}, ${misDatosFisicos.direccion.numero}, ${misDatosFisicos.direccion.ciudad}</p>
    <p>Altura: ${misDatosFisicos.altura || 'No especificada'}</p>
    <p>Peso: ${misDatosFisicos.peso || 'No especificado'}</p>
    <p>Hobby: ${misDatosFisicos.hobby || 'No especificado'}</p>
`;

// Asignar el HTML generado a innerHTML del contenedor perfil
perfilContainer.innerHTML = contenidoPerfil;