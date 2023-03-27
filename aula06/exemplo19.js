class Conta{
    constructor(){
        this.saldo = 0
    }

    get Saldo(){return this.saldo}
    set Saldo(pSaldo){this.saldo = pSaldo}

    Imprimir(){
        return ("Saldo: " + this.saldo);
    }
}

class Corrente extends Conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    } 

    get Saldo(){return this.limite}
    set Saldo(pLimite){this.limite = pLimite}

    Imprimir(){
        /*
        let retorno
        retorno = super.Imprimir();
        retorno = retorno + "\nLimite: " + this.limite
        return (retorno);*/
        return super.Imprimir() + "\nLimite: " + this.limite
    }
}

var obj_Corrente = new Corrente(300)
console.log(obj_Corrente.Imprimir())