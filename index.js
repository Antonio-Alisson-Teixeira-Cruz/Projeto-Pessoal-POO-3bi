const prompt = require("prompt-sync")()
const Aluno = require("./class/Aluno")
const Bibliotecario = require("./class/Bibliotecario")
const Livro = require("./class/Livro")
const Acervo = require("./class/Acervo")

let continuar = true

const acervo = new Acervo([
    new Livro("Dom Quixote", "Miguel de Cervantes", "Romance", 1605, 900, 2),
    new Livro("1984", "George Orwell", "Distopia", 1949, 300, 3),
    new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Infantil", 1943, 100, 1),
    new Livro("A cinco passos de você", "Rachel linppincott", "Romance", 2018, 288, 2)
])

if (!acervo.procurarLivro) {
    acervo.procurarLivro = function(titulo){
        return this.livros.find(livro => livro.titulo.toLowerCase() === titulo.trim().toLowerCase())
    }
}


function menuAluno(aluno) {
    let menuAlunoContinuar = true
    while(menuAlunoContinuar){
        let menu = prompt(`\n===== Menu do aluno =====
1 - Acessar painel
2 - Verificar informações
3 - Pegar livro
4 - Devolver livro
5 - Listar acervo
0 - Sair
Escolha: `)

        switch(menu) {
            case "1":
                console.log(Aluno.acessoPainel())
                break
            case "2":
                console.log(aluno.mostrarInformacoes())
                break
            case "3":
                console.log("\n--- Acervo ---")
                console.log(acervo.listarLivros())
                let titulo = prompt("Digite o título do livro que deseja pegar: ")
                let livro = acervo.procurarLivro(titulo)
                if(livro){  
                    console.log(aluno.pegarLivro(livro))
                } else {
                    console.log("Livro não encontrado no acervo.")
                }
                break
            case "4":
                console.log(aluno.devolverLivro())
                break
            case "5":
                console.log("\n--- Acervo ---")
                console.log(acervo.listarLivros())
                break
            case "0":
                menuAlunoContinuar = false
                break
            default:
                console.log("Opção inválida.")
        }
    }
}

function menuBibliotecario(bibliotecario){
    let menuBibliContinuar = true
    while(menuBibliContinuar){
        let menu = prompt(`\n===== Menu do bibliotecário =====
1 - Ver acervo
2 - Ver painél
3 - Adicionar livro
4 - Remover livro
0 - Sair
Escolha: `)

        switch(menu) {
            case "1":
                if(bibliotecario.listarAcervo) {
                    bibliotecario.listarAcervo(acervo)
                } else {
                    console.log(acervo.listarLivros())
                }
                break
            case "2":
                console.log(Bibliotecario.acessoPainel)
            case "3":
                let titulo = prompt("Título do livro: ")
                let autor = prompt("Autor: ")
                let genero = prompt("Gênero: ")
                let ano = parseInt(prompt("Ano de publicação: "))
                let paginas = parseInt(prompt("Número de páginas: "))
                let qtd = parseInt(prompt("Quantidade disponível: "))
                let livro = new Livro(titulo, autor, genero, ano, paginas, qtd)
                if(bibliotecario.adicionarLivro){
                    bibliotecario.adicionarLivro(acervo, livro)
                } else {
                    acervo.adicionarLivro(livro)
                }
                console.log(`\nLivro "${titulo}" adicionado.\n`)
                break
            case "4":
                let remover = prompt("Qual livro deseja remover? ")
                console.log(`\nO livro ${remover} foi removido`)
                bibliotecario.removerLivro(acervo, remover)
                
                break
            case "0":
                menuBibliContinuar = false
                break
            default:
                console.log("\nOpção inválida.")
        }
    }
}


while(continuar){
    console.log("\n=== Sistema da Biblioteca ===")
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    let classe = prompt("Você é: \n1 - Aluno\n2 - Bibliotecário\nEscolha: ")

    if(classe === "1"){
        let turma = prompt("De que turma você é? ")
        let aluno = new Aluno(nome, idade, turma)
        menuAluno(aluno)
    } else if(classe === "2"){
        let bibliotecario = new Bibliotecario(nome, idade)
        menuBibliotecario(bibliotecario)
    } else {
        console.log("\nOpção inválida, tente novamente.")
    }

    let resp = prompt("\nDeseja encerrar o sistema? (s/n): ")
    if(resp.toLowerCase() === "s"){
        continuar = false
    }
}

console.log("\nSistema encerrado. Até logo!")
