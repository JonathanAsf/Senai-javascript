const id = document.getElementById("id")
const nome = document.getElementById("nome")
const apelido = document.getElementById("apelido")
const telefone = document.getElementById("telefone")
const rua = document.getElementById("rua")
const cidade = document.getElementById("cidade")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data[0])
            id.innerText = data[0].id
            nome.innerText = data[0].name
            apelido.innerText = data[0].username 
            telefone.innerText = data[0].phone
            rua.innerText = data[0].address.street
            cidade.innerText = data[0].address.city


    })
