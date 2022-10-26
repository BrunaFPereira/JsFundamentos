// declaração de expressão

function minhaFuncao(param) {
    // bloco codigo
}
//minhaFuncao("param")


// expressão de função

//const soma = function(n1, n2) {return n1 + n2}
//console.log(soma(1,1))

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar())

function apresentar() {
    return "Olá";
}


const soma = function(n1, n2) {return n1 + n2}

console.log(soma(1, 1))