let pizzaChegou = true

const pedido = new Promise((resolve, reject) =>{
    if (pizzaChegou == true){
        resolve("A pizza chegou")
    }else{
        reject("A pizza ainda não chegou. Contate a pizzaria para mais detalhes")
    }
})

pedido
    .then(() => {
        console.log("Resolve")
    })
    .catch(() => {
        console.log("Reject")
    })
