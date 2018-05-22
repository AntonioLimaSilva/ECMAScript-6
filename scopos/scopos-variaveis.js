/**
 * Pra quem vem do mundo Java ou outras linguagens, é um tando quanto estranho acessar a
 * variável nome fora do bloco onde ela foi definida, porem isso é possível aqui no javascript, é 
 * o que chamamos de hoisting. Pra evitar  que isso aconteça use as variáveis let ou const.
 */

const x  = function() {
   
    let ativo = true;

    if(ativo) {
        var nome = 'Antonio';
    }

    console.log(nome);

}

/**
 * Nesse caso usando a variavel let o nome fica visível somente dentro do bloco onde a variável foi
 * definida, isso si aplica para a variável const também.
 */
const y = function() {
    let ativo = true;

    if(ativo) {
        let nome = 'Antonio';
    }

    console.log(nome); // Erro na linha 26
}

x();
y();
