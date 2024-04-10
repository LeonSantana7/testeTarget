function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    return b === numero;
}

const numero = parseInt(prompt("Digite um número: "));
if (verificaFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
