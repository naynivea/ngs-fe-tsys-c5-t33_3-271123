const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const obtenerLongitudArray = () => {
  console.log("La longitud del array es:", array.length);
};

const obtenerElementoAleatorio = () => {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  const elementoAleatorio = array[indiceAleatorio];
  console.log("Elemento aleatorio del array:", elementoAleatorio);
};

obtenerLongitudArray();
obtenerElementoAleatorio();
