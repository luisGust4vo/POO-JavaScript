class Filme{
    constructor(titulo,ano,genero,diretor,duracao){
        // Atributos
        this.titulo = titulo;
        this.ano = ano;
        this.genro = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores =[]; 
    }
        // Metodos

    Reproduzir(){
        console.log('Reproduzindo....');
    }
    Pausar(){
        console.log('Pausado');
    }
    Avancar(){
        console.log('Avançando');
    }
    Fechar(){
        console.log('Fechando');
    }
    Ficha(){
        //acessando atributos dentro da propria class
        this.Reproduzir();
        console.log("Titulo do filme: "+this.titulo);
        console.log("Ano do filme: "+this.ano);
        console.log("Duracao: "+this.duracao);
        this.Pausar();
        console.log("-----------------------");
    }
}

// objetos
var vingadores = new Filme(); //como se fosse uma "copia" pra variavel - copia da class


// acesso aos metodos
// vingadores.Reproduzir();
// vingadores.Pausar();

// acessar os atributos

vingadores.titulo = 'Vingadores';
vingadores.ano = 2014;
vingadores.genro = 'acao';

// console.log("Titulo do filme: "+vingadores.titulo+" ano do filme: "+ vingadores.ano +" O genero do filme e: "+ vingadores.genro);

// passando informacoes diretas para o construtor

var demolidor = new Filme("Demolidor",2016,"acao","Pessoa","2h");
var hulk = new Filme("Hulk",2000,"acao","Pessoa","3h");
// console.log(demolidor);

demolidor.Ficha(); // chamando dentro da class
hulk.Ficha();