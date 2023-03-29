class Pessoa{
    constructor(pNome,pEndereco,pRenda){
        this.Nome = pNome;
        this.Endereco = pEndereco;
        this.Renda = pRenda;
    }
    get Nome(){return this.nome};
    set Nome(pNome){this.nome = pNome};
    get Endereco(){return this.endereco};
    set Endereco(pEndereco){this.endereco = pEndereco};
    get Renda(){return this.renda};
    set Renda(pRenda){this.renda = pRenda};

    toString(){return "Nome: " + this.nome + "\nEndereco: " + this.endereco + "\nRenda: " + this.renda}
}

class Fisica extends Pessoa{
    constructor(pNome,pEndereco,pRenda,pCpf,pDtNascimento){
        super(pNome,pEndereco,pRenda);
        this.Cpf = pCpf;
        this.DtNascimento = pDtNascimento
    }
    get Cpf(){return this.cpf};
    set Cpf(pCpf){this.cpf = pCpf}
    get DtNascimento(){return this.dtNascimento};
    set DtNascimento(pDtNascimento){this.dtnascimento= pDtNascimento}

    maioridade(){
        let idade = 2023 - this.dtnascimento
        if(idade < 18)
        {return false}

        if(idade >= 18)
        {return true}
    }

    rendaCorrigida(){
        if(this.renda <= 2000){
            let Corrigido = this.renda;
            return Corrigido
        }
        if(this.renda >= 2001 && this.renda <= 4000){
            let Corrigido = this.renda - ((this.renda*7.5)/100)
            return Corrigido
        }
        if(this.renda >= 4001 && this.renda <= 6000){
            let Corrigido = this.renda - ((this.renda*15)/100)
            return Corrigido
        }
        if(this.renda >= 6001 && this.renda <= 7500){
            let Corrigido = this.renda - ((this.renda*15)/100)
            return Corrigido
        }
        if(this.renda > 7500){
            let Corrigido = this.renda - ((this.renda*27)/100)
            return Corrigido
        }
    }
    toString(){
        let retorno = super.toString();
        retorno = "\n" + retorno + "\nCpf: " + this.cpf + "\nData de Nascimento: " + this.dtnascimento + "\nÉ maior?: " + p2.maioridade() + "\nRenda Corrigida: " + p2.rendaCorrigida()
        return retorno;
    }
}

class Juridica extends Pessoa{
    constructor(pNome,pEndereco,pRenda,pCnpj,pRazaoSocial){
        super(pNome,pEndereco,pRenda);
        this.Cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial
    }
    get Cnpj(){return this.cnpj};
    set Cnpj(pCnpj){this.cnpj = pCnpj}
    get RazaoSocial(){return this.razaosocial};
    set RazaoSocial(pRazaoSocial){this.razaosocial= pRazaoSocial}

    rendaCorrigida(){
        if(this.renda <= 3000){
            this.renda = this.renda - ((this.renda*3)/100);
            return this.renda
        }
        if(this.renda >= 3001 && this.renda <= 6000){
            this.renda = this.renda - ((this.renda*7)/100);
            return this.renda
        }
        if(this.renda > 6000){
            this.renda = (this.renda - ((this.renda*15)/100))
            return this.renda
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

    toString(){
        let retorno = super.toString();
        retorno ="\n" + retorno + "\nCnpj: " + this.cnpj + "\nRazão Social: " + this.razaosocial + "\nCNPJ valido?: " + p3.verificarCNPJ() + "\nRenda Corridida: " + p3.rendaCorrigida()
        return retorno;
    }
}

var p1 = new Pessoa("uygf","if",2000);
console.log(p1.toString()); 

var p2 = new Fisica("uygf","if",3000,516165,2000);
console.log(p2.toString()); 

var p3 = new Juridica("uygf","if",3000,516165,2000);
console.log(p3.toString()); 


 