const Usuario = require("./Usuario")

class Aluno extends Usuario {
    static totalAluno = 0
    #livroEmprestado
    constructor(nome, idade, livroEmprestado = null, turma) {
        super(nome, idade)
        this.#livroEmprestado = livroEmprestado
        this.turma = turma
        Aluno.totalAluno++
    }

    static totalAlunos() {
        return `Total de alunos cadastrados: ${Aluno.totalAluno}`
    }

    static acessoPainel() {
       return "Painel do aluno: Pegar e Devolver livros."
    }

    mostrarInformacoes() {
        return `Nome: ${this.nome}
Idade: ${this.idade}
Turma: ${this.turma}
Livro emprestado: ${this.#livroEmprestado ? this.#livroEmprestado.titulo : "Nenhum"}`
    }
    
    pegarLivro(livro) {
        if(this.#livroEmprestado == null && livro.exemplares > 0) {
            this.#livroEmprestado = livro
            livro.exemplares--
            return `O livro ${this.#livroEmprestado.titulo} foi pego pelo aluno ${this.nome}.`
        } else if(this.#livroEmprestado !== null){
            return `O aluno ${this.nome} já tem um livro emprestado, devolva para pegar outro.`
        } else if(livro.exemplares == 0) {
            return `Não há exemplares disponíveis desse livro em estoque.`
        }
    }

    devolverLivro() {
        if(this.livroEmprestado == null) {
            return `O aluno ${this.nome} não tem nenhum livro em posse.`
        } else {
            this.#livroEmprestado.exemplares++
            this.#livroEmprestado = null
            return `O aluno ${this.nome} devolveu o livro que estava emprestado.`
        }
    }
}

module.exports = Aluno