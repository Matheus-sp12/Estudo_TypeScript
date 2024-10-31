type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Anna",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}