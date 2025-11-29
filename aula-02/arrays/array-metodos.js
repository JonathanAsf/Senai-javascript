let frutas = ["Laranja", "Uva", "Melancia"]

frutas.unshift("Melão")
frutas.push("pera")
frutas.splice(2,0,"Tomate") //Índice, numero de exclusão, adição
console.log(frutas)
frutas.pop()
console.log(frutas)
frutas.shift()
console.log(frutas)
frutas.splice(2,1)
console.log(frutas.length)

frutas.forEach(function(elemento){
    console.log(`Olá ${elemento}`)  
})


