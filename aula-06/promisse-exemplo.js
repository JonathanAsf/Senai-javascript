const verificarResultado =  new Promise((resolve,reject) =>{
    let result = 1+3

    if (result == 2){
        resolve("Número é 2")
    }else{
        reject("O número não é 2")
    }
})

verificarResultado
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

