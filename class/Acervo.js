class Acervo {
    constructor(livros = []){
        this.livros = livros
    }

    quantidadeLivros(){
        return `Quantidade de livros nos acervo: ${this.livros.length}.`
    }

    listarLivros() {
        if(this.livros.length === 0 ) {
            return "Não há livros no acervo."
        } else {
            return `Livros no acervo: 
            ${this.livros.map(livro => livro.mostrarInformacoes()).join("\n\n")}`
        }
    }
}