//Criação da classe carro
class carro {
    constructor(nome, ano, portas, janelas) {
        this.nome = nome;
        this.ano = ano;
        this.portas = portas;
        this.janelas = janelas;
    }

    //Metodo que retorna a idade do meu carro
    idadecarro(AnoAtual) {
        return AnoAtual - this.ano;

    }
}


//criação de objetos que herda caracteristicas da classe carro
let carro1 = new carro("Celta", 2002, 2, 4)
let carro2 = new carro("Veloster", 2016, 3, 4)

//Apresentar os objetos no console.log
console.log(carro)
console.log(carro1.nome)

//Pegar o ano atual
let dataHoje = new Date();
let ano = dataHoje.getFullYear

//Retornar a idade do objeto carro1
console.log(carro1.idadecarro(ano))
