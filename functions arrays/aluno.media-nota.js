/** 
 * Arrow function
 * 
 * Somando as notas dos alunos e obtendo a média final
*/

const media = function(...notas) {
    return notas.reduce((segundo, primeiro) => segundo + primeiro) / notas.length;
}


console.log(media(10, 8.5, 9.0, 10));
