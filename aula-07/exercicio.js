function baixarArquivo(callback){
    console.log("Baixando arquivo...")
    setTimeout(() =>{
        console.log("Download concluído!")

    },4000);
}

function abrirArquivo(){
    console.log("Abrindo o arquivo")
}

baixarArquivo(abrirArquivo)
