
//* Funcion calcular descuento
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}
//* Funcion dom
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;
  const resultadoJS = document.getElementById("resultadoJS");
  // console.log({inputPrice,priceValue,inputDiscount,discountValue,});
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  resultadoJS.innerText = "Precio con descuento: $" + precioConDescuento;
}
