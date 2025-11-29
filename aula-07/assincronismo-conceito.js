// Assincronismo permite a execução de uma função em segundo plano, permitindo que o fluxo do programa siga normalmente sem interrupção.

setTimeout(() => {
     console.log("1. Iniciando servidor")
    },2000);
console.log("2. Executando o servidor")
console.log("3. Finalizando o servidor servidor")

function assarPizza(){
    setTimeout(() =>{
        console.log("Pizza pronta")
    },2000)
}
console.log("Preparando a Pizza")
assarPizza()
console.log("Comendo a pizza")

