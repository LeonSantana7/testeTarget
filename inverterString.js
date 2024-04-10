function inverteString(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

const stringOriginal = prompt("Digite uma string: ");
const stringInvertida = inverteString(stringOriginal);
console.log("String invertida:", stringInvertida);
