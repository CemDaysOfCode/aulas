console.log(3 == '3')
console.log(3 === '3')

console.log(Number('3') + Number('4') >= 7)

const frutas = `banana`

switch (frutas) {
    case 'banana' :
        console.log('nao fruta favorita de alguém!')
        break
    case 'maca': 
    case 'acai':
        console.log('é a fruta favorita de alguém!')
    default:
        console.log('temos frutas') 
}
