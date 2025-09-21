class Acervo {
    #livros
    constructor(livros = []){
        this.#livros = livros
    }

    get livros() {
        return [... this.#livros]
    }

    quantidadeLivros(){
        return `Quantidade de livros nos acervo: ${this.#livros.length}.`
    }

    listarLivros() {
        if(this.#livros.length === 0 ) {
            return "Não há livros no acervo."
        } else {
            return `Livros no acervo: 
            ${this.#livros.map(livro => livro.mostrarInformacoes()).join("\n\n")}`
        }
    }

    adicionarLivro(livro, bibliotecario) {
        this.#livros.push(livro)
        return `O livro ${livro.titulo} foi adicionado ao acervo da biblioteca pelo biliotecário ${bibliotecario.nome}.`
    }

    removerLivro(livro) {
        let index = this.#livros.indexOf(livro)
        if(index !== -1){
            this.#livros.splice(index, 1)
            return `O livro ${livro.titulo} foi removido`
        } else {
            return `O livro requerido não existe, logo não pode ser removido.`
        }
    }
}

module.exports = Acervo