class Livro {
    constructor(titulo, autor, genero, anoPublicacao, paginas, exemplares) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.anoPublicacao = anoPublicacao
        this.paginas = paginas
        this.exemplares = exemplares
    }

    mostrarInformacoes() {
        return `Título: ${this.titulo}
Autor: ${this.autor}.
genero: ${this.genero}.
Ano de Publicação: ${this.anoPublicacao}.
Páginas: ${this.paginas}.
Exemplares disponiveis: ${this.exemplares}.`
    }
}

module.exports = Livro