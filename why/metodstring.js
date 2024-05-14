
/*ejercicio video*/

let cadena = "Hola como ESTAS?"
console.log("CHARAT: "+cadena.charAt(1));
console.log("CHARAT: "+cadena.charAt(2));
console.log("CHARAT: "+cadena.charAt(3));
console.log("CHARAT: "+cadena.charAt(cadena.length-1));

console.log("SLICE: "+cadena.slice(0,4));
console.log("SLICE: "+cadena.slice(6,10));
console.log("SLICE: "+cadena.slice(8,cadena.length-1));

console.log("SPLIT: "+cadena.split("")); //SPLI: H,o,l,a, ,c,o,m,o, ,E,S,T,A,S,?
console.log(typeof cadena.split("")); //objeto
console.log("SPLIT: "+cadena.split());
console.log("SPLIT: "+cadena.split("o"));//SPLIT: H,la c,m, ESTAS? separa por palabras
console.log("SPLIT: "+cadena.split(" "));//SPLIT: Hola,como,ESTAS? separa por caracteres
console.log("SPLIT: "+cadena.split());
console.log("SPLIT: "+cadena.split());

//reverse

console.log("REVERSE: "+cadena.split(" ").reverse())
console.log("REVERSE: "+cadena.split("").reverse())