class Acervo {
    #livros
    constructor(livros = []){
        this.#livros = livros
    }

    get livros() {
        return [...this.#livros]
    }

    listarLivros() {
        if(this.#livros.length === 0){
            return "Não há livros no acervo."
        }
        return this.#livros.map(livro => livro.mostrarInformacoes()).join("\n\n")
    }

   
    procurarLivro(titulo) {
        return this.#livros.find(livro => livro.titulo.toLowerCase() === titulo.trim().toLowerCase())
    }

  
    adicionarLivro(livro) {
        this.#livros.push(livro)
        return `O livro "${livro.titulo}" foi adicionado ao acervo.`
    }

    removerLivro(titulo) {
        const livro = this.procurarLivro(titulo)
        if(livro) {
            this.#livros = this.#livros.filter(livro => livro !== livro)
            return `O livro "${titulo}" foi removido do acervo.`
        } else {
            return `Livro "${titulo}" não encontrado no acervo.`
        }
    }
}

module.exports = Acervo