const prompt = require("prompt-sync")()
let continuar = true
let menuAlunoContinuar = true

function menuAluno(){
    while(menuAlunoContinuar){
        let turma = prompt('De que turma você é? ')
        
    }
}



while(continuar) {
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