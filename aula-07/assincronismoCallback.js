function assarPizza(callback){
    setTimeout(() => {
        console.log("Piza Pronta")
        callback()
    },2000)
}

function comerPizza(){
    console.log("Comendo Pizza")
}

console.log("Preparando pizza")
assarPizza(comerPizza)