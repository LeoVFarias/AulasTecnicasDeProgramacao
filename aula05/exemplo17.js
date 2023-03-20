class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome;
        this.Preco = pPreco;
    }

    get Nome(){return this.Nome}
    set Nome(pNome){this.nome = pNome}
    
    get Preco(){return this.Preco}
    set Preco(pPreco){this.preco = pPreco}


}

var obj_livro1 = new Livro("gz", 200)
var obj_livro2 = new Livro("2d", 100)

var lista = []
lista.push(obj_livro1)
lista.push(obj_livro2)

console.log(lista[0]);
console.log(lista[1]);