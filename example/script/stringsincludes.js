// Tercera ACtividad de cadenas de texto

function stringsIncludes(text1,text2) {
    const text = text2.includes(text1);

    if (text) {
        console.log(text);
        return true;
    } else {
        console.log(text);
        return false
    }
    
}

console.log(stringsIncludes("he", "Hello")); // Debería imprimir false
console.log(stringsIncludes("he", "hello world")); // Debería imprimir true
