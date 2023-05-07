/*
 * Funciones de lógica
 * Calcular perímetro y área*/
/*
 * Cudrado
 */
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
/*
 * Triangulo
 */
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
/*
 * Círculo
 */
function diametroCirculo(radio) {
  return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return radio * radio * PI;
}
/*
 * Funciones onclick
 */
const resultadoCuadrado = document.getElementById("resultadoCuadrado");
const resultadoTriangulo = document.getElementById("resultadoTriangulo");
const resultadoCirculo = document.getElementById("resultadoCirculo");

//. Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  // document.write(perimetro);
  resultadoCuadrado.innerHTML = "El perímetro es: " + perimetro + " cm";
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  // document.write(area);
  resultadoCuadrado.innerHTML = "El Área es: " + area + " cm2";
}
//. Triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputTriangulo-lado1");
  const value1 = inputLado1.value;
  const inputLado2 = document.getElementById("inputTriangulo-lado2");
  const value2 = inputLado2.value;
  const inputBase = document.getElementById("inputTriangulo-base");
  const base = inputBase.value;
  const perimetro = perimetroTriangulo(value1, value2, base);
  // document.write(perimetro);
  resultadoTriangulo.innerHTML = "El perímetro es: " + perimetro + " cm";
}
function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTriangulo-base");
  const base = inputBase.value;
  const inputAltura = document.getElementById("inputTriangulo-altura");
  const altura = inputAltura.value;
  const area = areaTriangulo(base, altura);
  // document.write(area);
  resultadoTriangulo.innerHTML = "El Área es: " + area + " cm2";
}
//. Circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  // document.write(perimetro);
  resultadoCirculo.innerHTML = "El perímetro es: " + perimetro + " cm";
}
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  // document.write(area);
  resultadoCirculo.innerHTML = "El Área es: " + area + " cm2";
}
