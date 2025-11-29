function verificarResultado(callbackSucess,callbackError){
    let result = 1 + 1

    if (result == 2){
        callbackSucess()
    } else {
        callbackError()
    }
}

function sucesso(){
    console.log("Uhuul!! Número 2")
}

function erro(){    
    console.log("Xiiii,número não é 2")
}

verificarResultado(sucesso,erro)
