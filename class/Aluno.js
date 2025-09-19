const Usuario = require("./Usuario")

class Aluno extends Usuario {
    //#livroEmprestado
    constructor(nome, idade, livroEmprestado = null) {
        super(nome, idade)
        this.livroEmprestado = livroEmprestado
    }

    /*get livroEmprestado() {
        return this.#livroEmprestado
    }*/

    acessoPainel() {
       return "Painel do aluno: Pegar e Devolver livros"
   }
    
    pegarLivro(livro, monitor) {
        if(this.livroEmprestado == null && livro.exemplares > 0) {
            this.livroEmprestado = livro
            livro.exemplares--
            return `O livro ${this.livroEmprestado} foi pego pelo ${this.nome} com a supervisão do bibliotecario ${monitor.nome}`
        } else if(this.livroEmprestado !== null){
            return `O aluno ${this.nome} já tem um livro emprestado, devolva para pegar outro.`
        } else if(livro.exemplares == 0) {
            return `Não há exemplares disponíveis desse livro em estoque`
        }
    }

    devolverLivro(monitor) {
        if(this.livroEmprestado == null) {
            return `O aluno ${this.nome} não tem nenhum livro em posse.`
        } else {
            livro.exemplares++
            this.livroEmprestado = null
            return `O aluno ${this.nome} devolveu o livro que estava emprestado com a supervisão do bibliotecario ${monitor.nome}`
        }
    }
}

module.exports = Aluno