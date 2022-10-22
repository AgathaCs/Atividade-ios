//método ForEach()

var frutas = ["Banana", "Maçã", "Kiwi", "Melancia"]

//Método ForEach(), é utilizado para percorrer um arrey e aplicar alguma mudança ou configuração

frutas.forEach(minhafuncao)

function minhafuncao(valor, indice);

console.log(`indice: ${valor}`);
console.log(`Valor: ${indice}`);

// Método forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
});

// forEach() com array de objetos
console.clear();
const tarefas = [
{
id: 1,
texto: 'Levar o lixo para fora',
isCompleted: true,
},
{
id: 2,
texto: 'Encontrar com o chefe',
isCompleted: true,
},
{
id: 3,
texto: 'Consulta no dentista',
isCompleted: false,
},
];
// Método map()
const numeros = [2, 7, 8, 25, 36];
const novosNumeros = numeros.map(Math.sqrt);
console.log(novosNumeros);

console.clear();
const cachorro = [
    {
        id: 1,
        nome: "Bolinho",
        idade: 7,
    },

    {
        id: 1,
        nome: "Toby",
        idade: 14,
    },

    {
        id: 1,
        nome: "Jacke",
        idade: 3,
    },
]

const mapCachorro = cachorro.mao((NomeDog) => {
    return NomeDog.nome;
})

//método filter(), percorre o array e retorna as informções que passam no filtro

const idade = [5, 9, 10, 25, 35, 45, 89]
//Percorre o array e retorar apenas as idedaes abaixo de 30

let filtraidade = idade.filter ((idade) => {
    return idade < 30
})
console.log(filtraidade)

//método Find ()

console.clear();
const meuArray = [
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
];
console.log(
meuArray.find((fruta) => {
return fruta.nome === 'cerejas';
})
);