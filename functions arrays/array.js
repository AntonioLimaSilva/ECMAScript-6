/**
 * Aqui é possível buscar o primeiro número maior que 10
 * @param {*} numbers 
 */
function buscarNumeros(...numbers) {
    return numbers.find(x => x > 10);
}

/**
 * Usando o filter é possível buscar um conjunto de dados, desde que si defina um
 * critério de busca
 * @param {*} numbers 
 */
function buscarNumerosEntre10E20(...numbers) {
    return numbers.filter(x => x > 9 && x < 21);
}

/**
 * Usando filter para buscar atravez de uma arrow function os elementos impares do array
 *  @param {*} numbers 
 */
function buscarNumerosImpares(...numbers) {
    return numbers.filter(x => x % 2 === 1);
}

console.log(buscarNumeros(1, 2, 11, 25, 10, 8));
console.log(buscarNumerosEntre10E20(1, 9, 10, 11, 15, 18, 20, 21, 22));
console.log(buscarNumerosImpares(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

