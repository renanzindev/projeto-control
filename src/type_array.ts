

//  TYPE ARRAY

let numeros: number[];

let filmes: string[];

filmes = ['Matrix', 'Senhor dos Anéis', 'O Poderoso Chefão'];

console.log('Meus filmes são: ', filmes);

// ADICIONAR UM FILME NO ARRAY
filmes.push('Homem Aranha de volta para o lar');

console.log('Meus filmes são: ', filmes);

// ADICIONAR UM NUMERO NO ARRAY
numeros = [1, 2, 3, 4, 5];

console.log(numeros);

numeros.push(6);

console.log('Meus numeros são: ', numeros);

// TYPE ARRAY COM UNION TYPE
let jogadores: (string | number)[] = ['Messi', 'Ronaldo', 'Neymar', 'Mbappé', 1, 2, 3, 4, 5];

jogadores.push('CR7' ,7)