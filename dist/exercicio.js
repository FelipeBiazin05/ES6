"use strict";

var alunos = ["Felipe", "Michel", "Giseli", "João", "Pedro"];
var boletimDeAlunos = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Full Stack',
    nota: Math.floor(Math.random() * 10) + 1
  };
  return itemAtual;
});
var alunosComNotaAlta = boletimDeAlunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosComNotaAlta);