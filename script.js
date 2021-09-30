function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * 5.4;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}