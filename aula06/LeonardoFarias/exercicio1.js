class Pessoa{
    constructor (pNome, pEndereco,pRenda){
        this.Nome = pNome;
        this.Endereco = pEndereco;
        this.Renda = pRenda;
        }
    get Nome() { return this.nome};
    set Nome (pNome) { this.nome = pNome};
    
    get Endereco() { return this.endereco};
    set Endereco (pEndereco){ this.endereco = pEndereco};
    
    get Renda(){return this.Renda}
    set Renda(pRenda){this.renda = pRenda}

    toString(){return ("Nome: " + this.nome + "\nEndereco: " + this.endereco + "\nRenda: " + this.renda)} 
}

class Fisica extends Pessoa{
    constructor(pNome, endereco, renda, CPF, dtNascimento){
        super(pNome,endereco,renda);
        this.CPF = CPF;
        this.dtNascimento = dtNascimento;
    }

    get cpf(){return this.cpf}
    set cpf(cpf){this.cpf = cpf}
    
    get dtNascimento(){return this.dtNascimento}
    set dtNascimento(dtNascimento){this.dtNascimento = dtNascimento}

    toString(){
        let retorno = super.toString()
        retorno = retorno + "\nCpf: " + this.cpf + "\nData de Nascimento: "+ this.dtNascimento;
        return retorno
    }

    maioridade(){
        let idade = 2023 - this.dtNascimento
        if(idade < 18)
        {return false}

        if(idade >= 18)
        {return true}
    }

    rendaCorrigida(){
        if(renda <= 2000){
            let Corrigido = renda
            return Corrigido
        }
        if(renda >= 2001 && renda <= 4000){
            let Corrigido = renda - ((renda*7.5)/100)
            return Corrigido
        }
        if(renda >= 4001 && renda <= 6000){
            let Corrigido = renda - ((renda*15)/100)
            return Corrigido
        }
        if(renda >= 6001 && renda <= 7500){
            let Corrigido = renda - ((renda*15)/100)
            return Corrigido
        }
        if(renda > 7500){
            let Corrigido = renda - ((renda*27)/100)
            return Corrigido
        }
    }
}

class Juridica extends Pessoa{
    constructor (pNome, pEndereco,pRenda, pCnpj, pRazaoSocial){
        super (pNome, pEndereco, pRenda);
        this.cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial;
        }
        get Cnpj () { return this.cnpj};
        set Cnpj (pCnpj) { this.cnpj = pCnpj};
        get RazaoSocial() { return this.razaoSocial};
        set RazaoSocial (pRazaoSocial){ this.razaoSocial = pRazaoSocial};

    toString(){
        let retorno = super.toString()
        retorno = retorno + "\nCNPJ: " + this.cnpj + "\nRazao Social: "+ this.razaoSocial + "\nRenda Corrigida: " + p1.rendaCorrigida() + "\nValidação CNPJ: " + p1.verificarCNPJ();
        return retorno
    }

    rendaCorrigida(pRenda){
        if(this.pRenda <= 3000){
            let Corrigido = this.pRenda - ((thisp.Renda*3)/100);
            return Corrigido
        }
        if(this.pRenda >= 3001 && this.pRenda <= 6000){
            let Corrigido = this.pRenda - ((this.pRenda*7)/100);
            return Corrigido
        }
        if(this.pRenda > 6000){
            let Corrigido = (this.pRenda - ((pRenda*15)/100))
            return "Renda Corrigida: " + Corrigido
        }
    }

    verificarCNPJ(){
        let cnpj = this.cnpj
        if(cnpj.length == 14){
            return true;
        }else{
            return false;
        }
    }
}

var p1 = new Juridica("Joao", "Feira", 5000, "12345678912345","s")
console.log(p1.toString());

var p2 = new Fisica("Joao", "Feira", 5000, "2000","s")
console.log(p2.toString());