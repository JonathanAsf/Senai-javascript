let usuario

function criarUsuario(callback){
    setTimeout(()=>{
        usuario = {
            nome: "Jonathan",
            idade: 22,
            email: "jonathan.a.farias@gmail.com"
        }
        callback()
    },2000)
}

function mostrarUsuario(){
    console.log(usuario)
}

criarUsuario(mostrarUsuario)
