/**
 * Definindo classe no ES6
 * Obs: Os nomes das propriedades devem ser diferente dos parametros recebidos no construtor
 */

class Produto {

    constructor(id, nome, valor) {
        this._id = id;
        this._nome = nome;
        this._valor = valor;
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set valor(valor) {
        this._valor = valor;
    }

    get valor() {
        return this._valor;
    }

}

let produto = new Produto(1, 'Video game', 500);
console.log(produto.id);
console.log(produto.nome);
console.log(produto.valor);