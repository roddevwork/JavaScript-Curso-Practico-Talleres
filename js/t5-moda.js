
//* Funcion moda
function calcularModa(lista) {
  const listaCount = {};
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  const listaArray = Object.entries(listaCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });
  const moda = listaArray[listaArray.length - 1];

  return "La moda es: " + moda[0] + ".  Se repite " + moda[1] + " veces";
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
//* Funcion que llamamos del boton CALCULAR Moda
//. Capturar los input generados dinamicamente
//. Llamar a la funcion para sacar el promedio(calcularMediaAritmetica)

function calcularModaFinal() {
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
  //? enviamos el array ordenado (lista0ordenada) a calcular moda
  const modaFinal = calcularModa(array2);
  // console.log("la moda es:" + modaFinal);
  //? inyectamos el valor de la moda en el html
  const resultadoPantalla = document.getElementById("resultadoPantalla");
  resultadoPantalla.innerText = modaFinal;
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
  let nuevoTexto = document.createTextNode("Calcular Moda");
  cajaBoton.appendChild(nuevoBoton);
  nuevoBoton.appendChild(nuevoTexto);

  // nuevoBoton.setAttribute("class", "btns");
  nuevoBoton.setAttribute("id", "nuevo-btn");

  nuevoBoton.setAttribute("type", "button");
  cajaBoton.setAttribute("class", "btns");
  let contenedorDivBoton = document.getElementById("form__promedio");
  contenedorDivBoton.appendChild(cajaBoton);

  const botonModa = document.getElementById("nuevo-btn");
  botonModa.addEventListener("click", calcularModaFinal);
}
