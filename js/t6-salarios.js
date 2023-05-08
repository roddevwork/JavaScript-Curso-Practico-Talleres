//* Array de objetos de Salarios
//. nombres y salarios
const pais = [];
pais.push({
  name: "Camila",
  salary: 500,
});
pais.push({
  name: "Rodrigo",
  salary: 1500,
});
pais.push({
  name: "Florencia",
  salary: 1200,
});
pais.push({
  name: "Maria",
  salary: 800,
});
pais.push({
  name: "Mario",
  salary: 900,
});
pais.push({
  name: "Gustavo",
  salary: 1300,
});
pais.push({
  name: "Pedro",
  salary: 600,
});
pais.push({
  name: "Franco",
  salary: 1500,
});
pais.push({
  name: "Celeste",
  salary: 2000,
});
pais.push({
  name: "Carlos",
  salary: 900,
});
pais.push({
  name: "Carlos",
  salary: 900,
});
pais.push({
  name: "Carlos",
  salary: 900,
});
pais.push({
  name: "miguel",
  salary: 1900,
});
pais.push({
  name: "renzo",
  salary: 1400,
});
pais.push({
  name: "ana",
  salary: 700,
});
pais.push({
  name: "ramito",
  salary: 1800,
});
pais.push({
  name: "lia",
  salary: 1400,
});
pais.push({
  name: "martin",
  salary: 1200,
});
pais.push({
  name: "sofia",
  salary: 1000,
});
pais.push({
  name: "franco",
  salary: 1000,
});

//* Dom js
const salarios = document.getElementById("salarios");

let nuevoArray = pais.map(function (e) {
  return "<li>" + e.name + ": " + "$" + e.salary + "</li>";
});
salarios.innerHTML = nuevoArray;
