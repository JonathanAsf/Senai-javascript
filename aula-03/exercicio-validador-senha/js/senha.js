let senha = "abc"
let tentativa = prompt("Informe sua senha")

while (tentativa != senha){
    alert("Senha Incorreta! ")
    tentativa = prompt("Senha incorreta. Tente Novamente")
}   

alert("Bem vindo ao nosso sistema")