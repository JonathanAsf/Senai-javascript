const buscarUsuario = new Promise ((resolve, reject) => {
    console.log("Buscando usuário no banco de dados... ")

    setTimeout(() => {

        let encontrado = true
        
        if(encontrado == true){
            resolve({nome: "Jonathan", idade: 22, profissao: "Desenvolvedor de Soluções"})
        } else{
            reject("Usuário não encontrado")
        }
    },2000)
})

 buscarUsuario
    .then((res) => {
        console.log(`Nome do usuário: ${res.nome}`)
        console.log(`Idade do usuário: ${res.idade}`)
        console.log(`Profissão do usuário: ${res.profissao}`)
    })
    .catch((res) => {
        console.log(res)
    })
