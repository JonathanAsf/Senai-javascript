let frutas = ["Laranja", "Uva", "Melancia"]

frutas.unshift("Melão")
frutas.push("pera")
frutas.splice(2,0,"Tomate") //Índice, numero de exclusão, adição
frutas.unshift("Melancia")
frutas.push("Melancias")

console.log(frutas)