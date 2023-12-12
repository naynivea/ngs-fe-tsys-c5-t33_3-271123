let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.splice(0, 1, "Objetos");

javascript1.splice(-1, 1, "ArraysDifíciles");

let ultimosDosElementos = javascript1.slice(-2);

let indiceFunciones = javascript1.indexOf("Funciones");

console.log("Array actualizado:", javascript1);
console.log("Copia con los últimos dos elementos:", ultimosDosElementos);
console.log("Índice de 'Funciones':", indiceFunciones);
