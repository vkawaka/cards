'use strict'

const funcionarios =  [{
    nome: 'Maria Souza',
    cargo: 'Designer',
    imagem: 'maria.jpg'
    },
    {
        nome: 'João Silva',
        cargo: 'DBA',
        imagem: 'joao.jpg'
    },
    {
        nome: 'Hugo Pereira',
        cargo: 'FrontEnd',
        imagem: 'hugo.jpg'
    },
    {
        nome: 'Ana Maria',
        cargo: 'BackEnd',
        imagem: 'ana.jpg'
    }
]


function criarCards(funcionario){
    const container = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./imagens/${funcionario.imagem}`
    imagem.alt = funcionario.nome

    const description = document.createElement('div')
    description.classList.add('card-description')

    const nome = document.createElement('h2')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    description.replaceChildren(nome, cargo)
    card.replaceChildren(imagem, description)
    container.appendChild(card)
}
funcionarios.forEach(criarCards)