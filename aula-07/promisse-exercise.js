const baixarArquivo = new Promise ((resolve, reject) => {
    setTimeout(() => {

        let download = false
        
        if(download == true){
            resolve({nome: "video.mp4", tamanho: "150mb", profissao: "Desenvolvedor de Soluções"})
        } else{
            reject("Falha ao baixar o arquivo")
        }
    },2000)
})

 baixarArquivo
    .then((res) => {
        console.log(`Nome do arquivo: ${res.nome}`)
        console.log(`Tamanho do arquivo: ${res.tamanho}`)
    })
    .catch((res) => {
        console.log(res)
    })




// Crie umaPRomise chamada baixarArquivo que simula o download de um baixarArquivo. APós 2 segundos, a PRomise deve ser resolvida com um objeto contendo {nome: "video.mp4", tamanho: "150mb"} se o downlaod for bem-sucedido. Caso contrário, rejeite com a mensagem "Falha ao baixasr o arquivo X". Consuma a PRomise com .then() e .catch() exibindo as mensagens adequadas 