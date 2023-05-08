
//* Funcion calcular promedio(media aritmetica)
function calcularSumaLista(lista) {
  let sumalista = 0;
  for (i = 0; i < lista.length; i++) {
    sumalista = sumalista + lista[i];
  }
  return sumalista;
}
function calcularMediaAritmetica(lista) {
  const promediolista = calcularSumaLista(lista) / lista.length;
  return promediolista;
}
//* funcion calcular mediana dinamicamente
//? funcion para ver si es par la cantidad de elementos del array
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function calcularMediana(lista1) {
  let mediana;
  let mitadLista1 = parseInt(lista1.length / 2);

  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    // si es impar
    mediana = lista1[mitadLista1];
  }
  return mediana;
}

//* Funcion ordenar lista de nuemros
function comparar(a, b) {
  return a - b;
}
function ordenarArreglo(array) {
  const array2 = array.map((el) => el).sort(comparar);
  return array2;
}

/*
 * DOM
 */
//* Funcion que llamamos del boton CALCULAR MEDIANA
//.capturar los input generados dinamicamente
//. Llamar a la funcion para sacar el promedio(calcularMediaAritmetica)

function calcularMedianaFinal() {
  //? capturamos el valor de los input dentro de un array
  let nuevoInput = document.getElementsByClassName("nuevo-input");
  let array = [];
  array = nuevoInput;
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    array2.push(Number(array[i].value));
  }
  // console.log({ array2 });
  //? ordenamos el array llamando a funcion para ello
  const lista0rdenada = ordenarArreglo(array2);
  // console.log({ lista0rdenada });
  //? enviamos el array ordenado (lista0ordenada) a calcular mediana
  const medianaFinal = calcularMediana(array2);
  // console.log("la mediana es:" + medianaFinal);
  //? inyectamos el valor de la mediana en el html
  const resultadoPantalla = document.getElementById("resultadoPantalla");
  resultadoPantalla.innerText = "La mediana es: " + medianaFinal;
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
  let nuevoTexto = document.createTextNode("Calcular Mediana");
  cajaBoton.appendChild(nuevoBoton);
  nuevoBoton.appendChild(nuevoTexto);

  // nuevoBoton.setAttribute("class", "btns");
  nuevoBoton.setAttribute("id", "nuevo-btn");
  nuevoBoton.setAttribute("type", "button");
  cajaBoton.setAttribute("class", "btns");
  let contenedorDivBoton = document.getElementById("form__promedio");
  contenedorDivBoton.appendChild(cajaBoton);

  const botonMediana = document.getElementById("nuevo-btn");
  botonMediana.addEventListener("click", calcularMedianaFinal);
}
