const listaConvidados = false 
const convite = false
let permissao = listaConvidados == true || convite == true

console.log(`O usuário possível permissão para entrar? ${permissao}`)