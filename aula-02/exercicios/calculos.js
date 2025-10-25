let numero1 = 20
let numero2 = 10
let operador = "**"

switch(operador){
    case "+":
        console.log(numero1 + numero2)
        break
    case "-":
        console.log(numero1 - numero2)
        break
    case "*":
        console.log(numero1 * numero2)
        break
    case "**":
        console.log(numero1 ** numero2)
        break
    case "/":
        console.log(numero1 / numero2)
        break
    default:
        console.log("Opção inválida")
        break
}