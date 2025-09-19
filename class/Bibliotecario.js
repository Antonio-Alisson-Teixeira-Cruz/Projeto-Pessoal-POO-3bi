const Usuario = require("./Usuario")

class Bibliotecario extends Usuario {
    acessoPainel() {
        return "Painel do bibliotecário: Adicionar e remover livro do estoque, entregar e receber livros do aluno"
    }

    adicionarLivro(livro, acervo) {
        acervo.livros.push(livro)
        return `O livro ${livro.nome} foi adicionado ao acervo da biblioteca pelo biliotecári ${this.nome}.`
    }

    removerLivro(livro, acervo) {
        let index = acervo.livros.indexOf(livro)
        acervo.livros.splice(index, 1)
    }
}