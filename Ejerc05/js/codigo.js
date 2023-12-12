const intercalarArrays = (arrayUno, arrayDos) => {
  let nuevoArray = [];

  for (let i = 0; i < arrayUno.length; i++) {
    nuevoArray.push(arrayUno[i]);
    nuevoArray.push(arrayDos[i]);
  }

  arrayUno.length = 0;
  arrayDos.length = 0;

  return nuevoArray;
};

let arrayUno = [7, 8, 5];
let arrayDos = [1, 3, 9];

let arrayIntercalado = intercalarArrays(arrayUno, arrayDos);

console.log("Array intercalado:", arrayIntercalado);
