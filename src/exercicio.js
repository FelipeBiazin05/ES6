const alunos = ["Felipe", "Michel", "Giseli", "João", "Pedro"];

const boletimDeAlunos = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Full Stack',
        nota: Math.floor(Math.random() * 10) + 1,
    }
    return itemAtual;
})

const alunosComNotaAlta = boletimDeAlunos.filter(function(aluno) {
    return aluno.nota >= 6;
});

console.log(alunosComNotaAlta)