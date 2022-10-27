alert('Bem vindo');
console.log(document);
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

document.title ="Primeira parte da Aula";
// Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Bem vindo ao IOS!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';

// Criar um elemento <section>
let section = document.createElement('SECTION');
section.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores autem quaerat dignissimos in consectetur saepe et nemo minus, eveniet nesciunt at voluptatem quis ut dolorem magni repellat impedit tenetur rem.';
document.body.appendChild(section);
section.style.borderBottom = 'solid 3px #000';

// Criar um elemento <p>
let p = document.createElement('P');
p.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores autem quaerat dignissimos in consectetur saepe et nemo minus, eveniet nesciunt at voluptatem quis ut dolorem magni repellat impedit tenetur rem.';
p.body.appendChild(p);
p.style.borderBottom = 'solid 3px #000';

// Criar um elemento <article>
let article = document.createElement('ARTICLE');
article.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores autem quaerat dignissimos in consectetur saepe et nemo minus, eveniet nesciunt at voluptatem quis ut dolorem magni repellat impedit tenetur rem.';
document.body.appendChild(article);
article.style.borderBottom = 'solid 3px #000';


// Criar um elemento <p>
let p2 = document.createElement('P2');
p2.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores autem quaerat dignissimos in consectetur saepe et nemo minus, eveniet nesciunt at voluptatem quis ut dolorem magni repellat impedit tenetur rem.';
article.body.appendChild(p2);
p2.style.borderBottom = 'solid 3px #000';