// array de salarios
const salariosCol = pais.map(function (personita) {
  //creo un nuevo array
  return personita.salary;
});
// ordenar el array en uno nuevo
const salariosColSorted = salariosCol.sort(function (salaryA, SalaryB) {
  return salaryA - SalaryB;
});
//* funcion del calculo de la mediana general de salarios
// 1-funcion si es par o impar
function esPar(numerito) {
  // if(numerito % 2 === 0){
  //   retunr true;
  // }else {
  //   return false;
  return numerito % 2 === 0;
}
// 2- funcion calcular promedio(media aritmetica)
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
// 3- funcion calcular la mediana salarial General
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    // si es par emepzaremos a calcular la mediana
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    // si es impar
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}
// llamar ala funcion mediana salarios y el enviamos la lista de salariosColSorted. la ordenada
// console.log(medianaSalarios(salariosColSorted));
const medianaGeneral = medianaSalarios(salariosColSorted);

// el objetivo es calcular la diferenica salarial
// que es calcular la mediana del top 10% mas altos en salarios contra la mediana salarial general
//* calcular la mediana del top 10% de salarios
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);
/* console.log({
  medianaGeneral,
  medianaTop10,
}); */

//* Dom para datos estaticos
const medianaGeneralID = document.getElementById("medianaGeneral");
const medianaTop10ID = document.getElementById("medianaTop10");

medianaGeneralID.innerText = "Salario Promedio General: " + medianaGeneral;
medianaTop10ID.innerText = "Salario Promedio del top 10: " + medianaTop10;
