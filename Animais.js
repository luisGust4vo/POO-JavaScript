// Herança 

class Animal{
    constructor(nome,idade,preco){
        this.nome;
        this.idade;
        this.preco;
    }
    ChecarEstoque(){
        return 10;
    }
}
class Cachorro extends Animal{

}

var cachorro = new Cachorro('Dog',5,250);
console.log(cachorro.ChecarEstoque);