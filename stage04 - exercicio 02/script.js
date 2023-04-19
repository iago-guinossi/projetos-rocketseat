let alunos = [
    {
        nome: 'Rayane',
        primeiraNota: 8,
        segundaNota: 9,
    },
    {
        nome: 'Ana',
        primeiraNota: 5,
        segundaNota: 9,
    },
    {
        nome: 'Iago',
        primeiraNota: 9.5,
        segundaNota: 9,
    },
    {
        nome: 'Ronaldo',
        primeiraNota: 7,
        segundaNota: 4,
    },
    {
        nome: 'Carol',
        primeiraNota: 6,
        segundaNota: 8,
    },
    {
        nome: 'Caio',
        primeiraNota: 2,
        segundaNota: 3,
    }
]

alunos.map(aluno =>{
        let media = (aluno.primeiraNota + aluno.segundaNota)/2
        let mediaAluno = `A média do aluno(a) ${aluno.nome} é: ${media}`
        let resultado
        if(media >= 7){resultado = `Parabéns ${aluno.nome}! Você foi Aprovado(a)!`} else {resultado = `Não foi dessa vez ${aluno.nome}, tente novamente!`}
        return( alert(`${mediaAluno} \n ${resultado}`))
    })