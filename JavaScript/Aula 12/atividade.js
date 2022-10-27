// Criar uma página HTML com uma lista, que possa IDs,
// Classes e atributo name configurado, abaixo da lista incluir
// 6 botões:
// 1) Alterar backgroundColor com getElementById
// 2) Alterar fontWeight com getElementsByClassName
// 3) Criar efeito zebrado na lista (alternar as cores) com
// getElementsByTagName
// 4) Incluir borderBottom com getElementsByName
// 5) Remover elemento da lista com remove
// 6) Recuperar elemento da lista com insertBefore e alterar
// o conteúdo para “item recuperado” com textContent


// Método getElementById
let titulo = document.getElementById('titulo');
// Alterando o conteúdo do elemento
titulo.innerHTML = 'Olá meus caros alunos!';
// Configurando o estilo CSS do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = 'pink';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';
// Método getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);
console.log(items[5]);
console.log(items[6]);

items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'whithe';
items.style.borderBottom = 'solid 3px #000';

items[2].textContent = 'Hello 2';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'black';
items.style.borderBottom = 'solid 3px #000';

items[3].textContent = 'Hello 2';
items[3].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'whithe';
items.style.borderBottom = 'solid 3px #000';

items[4].textContent = 'Hello 2';
items[4].style.fontWeight = 'bold';
items[4].style.backgroundColor = 'black';
items.style.borderBottom = 'solid 3px #000';

items[5].textContent = 'Hello 2';
items[5].style.fontWeight = 'bold';
items[5].style.backgroundColor = 'whithe';
items.style.borderBottom = 'solid 3px #000';

items[6].textContent = 'Hello 2';
items[6].style.fontWeight = 'bold';
items[6].style.backgroundColor = 'black';
items.style.borderBottom = 'solid 3px #000';