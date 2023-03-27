class Operacoes{
    constructor(){}

    somar(vA,vB){
        console.log(vA + vB);
    }

    //Sobrecarga
    somar(vA,vB,vC){
        console.log(vA + vB + vC);
    }
}

var Objeto = new Operacoes
Objeto.somar(10,20,30)