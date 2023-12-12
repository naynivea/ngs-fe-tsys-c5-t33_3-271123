let texto = "Hola";

let arrayTexto = texto.split("");

let arrayInvertido = arrayTexto.reverse();

let textoInvertido = arrayInvertido.join("");

console.log("Cadena original:", texto);
console.log("Versión invertida como array:", arrayInvertido);
console.log("Versión invertida como cadena:", textoInvertido);
