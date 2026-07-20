// recusrso novo ES2015

const pessoa = {
    nome: 'Amanda',
    idade: 24,
    endereco: {
        logradouro: 'Rua Lagoinhas',
        numero: 111
    }
}

const { nome, idade } = pessoa;
console.log(nome,idade);

const { nome: n, idade : i} = pessoa;
console.log(n, i)

const { endereco: { logradouro: l, numero: nr} } = pessoa;
console.log(l, nr);