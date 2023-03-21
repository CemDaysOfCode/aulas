const prompt = require(`prompt-sync`)()

const mediaParaAprovacao = 7

const nota1 = prompt('Digite a primera nota:  ')
const nota2 = prompt('Digite a segunda nota:  ')

const media = Number(nota1) + Number(nota2) / 2

const resultadoFinal = media >= 7 
 
switch (resultadoFinal) {
    case true:
     console.log('Aprovado')
     console.log(media)
     break
    case media === 10 :
        console.log('Aprovado com Distinção')
        console.log(media)  
        break
    default:    
      console.log('Reprovado')
      console.log(media)  
}


// if (media >= mediaParaAprovacao) {
//     console.log('Aprovado')
//     console.log(media)
// } else if (media < mediaParaAprovacao) {
//     console.log('Reprovado')
//     console.log(media)
// } else if (media === 10) {
//     console.log('Aprovado com Distinção')
//     console.log(media)
// }


