// COMPOSICAO

class Leitor{
    ler(caminho){
        return "conteudo arquivo";
    }
}
class Escritor{
    escrever(arquivo,conteudo){
        console.log("conteudo escrito");
    }
}
class Criador{
    criar(nome){
        console.log('criando arquivo')
    }
}
class Deletar{
    delete(nome){
        console.log('deletar');
    }
}

class ManiopularArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.deletar = new Deletar();
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new this.Criador();
        this.escritor = new Escritor();
    }
    salavarListaUsuarios(lista){
        this.criador = new Criador("usuarios.txt");
        this.escritor.Escritor('usuario.txt',lista);
    };
}

var manipulador = new ManiopularArquivo("meuarquivo.txt");
manipulador.leitor.ler();
manipulador.escritor.escrever();
manipulador.criador.criar();
manipulador.deletar.delete();