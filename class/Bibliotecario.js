const Usuario = require("./Usuario")

class Bibliotecario extends Usuario {
 
    static acessoPainel() {
        return "Painel do bibliotecário: Adicionar e remover livro do estoque."
    }

    adicionarLivro(acervo, livro) {
        return acervo.adicionarLivro(livro)
    }

    removerLivro(acervo, titulo) {
        return acervo.removerLivro(titulo)
    }


    listarAcervo(acervo) {
        console.log("\n--- Acervo ---")
        console.log(acervo.listarLivros())
    }
}

module.exports = Bibliotecario