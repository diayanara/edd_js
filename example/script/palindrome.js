//ultima bendita actividad

function palindrome(text) {
    const minuscula = text.toLowerCase()
    const oracion = minuscula.split('').reverse().join('');
    if (oracion === minuscula) {
        return true;
    } else {
        return false;
        
    }

}

console.log(palindrome("Arrivederchi"))
console.log(palindrome("Hello"))
console.log(palindrome("Hannah"))