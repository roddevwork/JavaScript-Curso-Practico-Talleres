
//* Funciones

function calcularSumaLista(lista) {
  let sumalista = 0;
  for (i = 0; i < lista.length; i++) {
    sumalista = sumalista + lista[i];
  }
  return sumalista;
}
function calcularMediaAritmetica(lista) {
  const promediolista = calcularSumaLista(lista) / lista.length;
  return promediolista.toFixed(2);
}
/*
 * DOM
 */
//* Funcion que llamamos del btnPromedio
//. capturar los input generados dinamicamente
//. llamar a la funcion para sacar el promedio(calcularMediaAritmetica)

function calcularPromedio() {
  let nuevoInput = document.getElementsByClassName("nuevo-input");
  let array = [];
  array = nuevoInput;
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    array2.push(Number(array[i].value));
  }

  const promedioFinal = calcularMediaAritmetica(array2);
  // console.log("el promedio es:" + promedioT);

  const resultadoPantalla = document.getElementById("resultadoPantalla");
  resultadoPantalla.innerText = "El Promedio es: " + promedioFinal;
}

//* Capturar cantidad de elementos a generar , crearlos dinamicamente , llamar funcion calcular el promedio
function cantidadElementos() {
  const inputCantidadNumeros = document.getElementById("inputCantidadNumeros");
  const cantidadNumeros = inputCantidadNumeros.value;

  for (let i = 0; i < cantidadNumeros; i++) {
    let nuevaCaja = document.createElement("div");
    let nuevoInput = document.createElement("input");
    nuevaCaja.appendChild(nuevoInput);
    nuevaCaja.setAttribute("class", " div-dinamico");
    nuevoInput.setAttribute("type", "number");
    nuevoInput.setAttribute("class", "input nuevo-input");
    nuevoInput.setAttribute("placeholder", "n°: " + (i + 1));
    let contenedorDiv = document.getElementById("inputGenerados");
    contenedorDiv.appendChild(nuevaCaja);
  }
  let cajaBoton = document.createElement("div");
  let nuevoBoton = document.createElement("button");
  let nuevoTexto = document.createTextNode("Calcular Promedio");
  cajaBoton.appendChild(nuevoBoton);
  nuevoBoton.appendChild(nuevoTexto);

  // nuevoBoton.setAttribute("class", "btns");
  nuevoBoton.setAttribute("id", "nuevo-btn");

  nuevoBoton.setAttribute("type", "button");
  cajaBoton.setAttribute("class", "btns");
  let contenedorDivBoton = document.getElementById("form__promedio");
  contenedorDivBoton.appendChild(cajaBoton);

  const botonPromedio = document.getElementById("nuevo-btn");
  botonPromedio.addEventListener("click", calcularPromedio);
  console.log(botonPromedio);
}
