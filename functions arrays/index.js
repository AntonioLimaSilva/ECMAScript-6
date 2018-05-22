const soma = function(x = 1, y = 1) {
    return x + y;
}

console.log(soma());

let multiplicacao = function(...numbers) {
    return numbers.reduce((segundo, primeiro) => segundo * primeiro);
}

console.log(multiplicacao(2, 3, 4));

var media = function(...notas) {
    return notas.reduce((segundo, primeiro) => segundo + primeiro) / notas.length;
}

console.log(media(10, 8, 6, 9));
