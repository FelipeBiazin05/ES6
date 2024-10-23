"use strict";

function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
  // console.log(arguments);
  // return a + b;
}
console.log(somar(10, 20, 30));