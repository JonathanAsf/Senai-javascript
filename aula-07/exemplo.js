let nome 

function darNome(callback){
    setTimeout(() =>{
        nome = "Jonathan"
        callback()
    },2000)
}

function mostrarNome(){
    console.log(nome)
}


darNome(mostrarNome)