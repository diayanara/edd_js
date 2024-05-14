/*Actividad de cadenas de texto numero2*/

function tittleFormat(text) {
    const text1 = text.charAt(0).toUpperCase();

    const text2 = text.slice(1).toLowerCase();

    const text5 = text1 + text2

    console.log(text5); 
    return text5.length;


}

console.log(tittleFormat("toda la vida"));
console.log(tittleFormat("whsaaaaaaaat"));
console.log(tittleFormat("me salió!!! Joder"));