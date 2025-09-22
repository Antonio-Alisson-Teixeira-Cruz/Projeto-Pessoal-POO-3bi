const prompt = require("prompt-sync")()
let continuar = true
let menuAlunoContinuar = true




while(continuar) {
    function menuAluno(){
        while(menuAlunoContinuar){
            let turma = prompt('De que turma você é? ')
            
            const aluno = new Aluno(nome, idade, classe)

            let menu = prompt(`Menu do aluno
O que deseja fazer?
1 - Acessar painel.
2 - Verificar informações.
3 - Pegar livro.
4 - Devolver livro.`)

            switch (menu) {
                case '1':
                    aluno.acessoPainel()
                    break;
            
                case '2':
                    aluno.mostrarInformacoes()
                    break

                case '3':
                    let livro = prompt("Que livro deseja pegar emprestado?")

                default:
                    console.log('Dado inválido!')
                    break;
            }
        }
    }
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    let classe = prompt("Você é: \n1 - Aluno \n2 - Bibliotecário \nobs.: Use apenas números")
    
    if(classe != "1" && classe != "2"){
        console.log('Dados inválidos, recomece o programa e tente novamente.')
        break
    }

    if(classe == '1'){
        menuAluno()
    }
    continuar = false
}