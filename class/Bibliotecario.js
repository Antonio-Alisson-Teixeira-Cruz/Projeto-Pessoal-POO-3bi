const Usuario = require("./Usuario")

class Bibliotecario extends Usuario {
    static acessoPainel() {
        return "Painel do bibliotecário: Adicionar e remover livro do estoque, entregar e receber livros do aluno."
    }

    adicionarLivro(livro, acervo) {
        acervo.adicionarLivro(livro, this)
    }

    removerLivro(livro, acervo) {
        acervo.removerLivro(livro)
    }
}

module.exports = Bibliotecario