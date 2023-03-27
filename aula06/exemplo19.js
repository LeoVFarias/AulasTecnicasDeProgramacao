class Conta{
    constructor(){
        this.saldo = 0
    }

    get Saldo(){return this.saldo}
    set Saldo(pSaldo){this.saldo = pSaldo}
}

class Corrente extends Conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    } 

    get Saldo(){return this.limite}
    set Saldo(pLimite){this.limite = pLimite}
}

var obj_Corrente = new Corrente(300)
console.log(obj_Corrente)