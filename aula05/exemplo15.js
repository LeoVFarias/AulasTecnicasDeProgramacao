class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome;
        this.Preco = pPreco;
    }

    get Nome(){return this.Nome}
    set Nome(pNome){this.nome = pNome}
    
    get Preco(){return this.Preco}
    set Preco(pPreco){this.preco = pPreco}

    calcularDesconto(disc){

        this.preco = this.preco - disc
    }
}

var obj_livro1 = new Livro("jooj", 200)
obj_livro1.calcularDesconto(50)
console.log("Nome do Livro: " + obj_livro1.nome + " | Preço Padrão: " + obj_livro1.preco)