const planetas = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
];

function listarPlanetas() {
  console.log("Planetas del Sistema Solar:");
  planetas.forEach((planeta) => console.log(planeta));
}

listarPlanetas();
