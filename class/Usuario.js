class Usuario {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
        Usuario.totalUsuarios++
    }

    static acessoPainel() {
        return "Acesso genérico ao sistema."
    }

    get nome() {
        return this.#nome
    }

    set nome(valor) {
        this.#nome = valor
    }

    get idade() {
        return this.#nome
    }

    set idade(valor) {
        this.#idade = valor
    }
}

module.exports = Usuario