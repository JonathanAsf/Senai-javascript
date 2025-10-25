clienteVIP = false
minimoCompra = 501
desconto = clienteVIP == true || minimoCompra > 500

console.log(`O desconto é válido: ${desconto}`)