class Usuario {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    acessoPainel() {
        return "Acesso genérico ao sistema."
    }

    static contarUsuarios (){
        return `Total de usuários criados: ${this.totalUsuarios}`
    }
}

module.exports = Usuario