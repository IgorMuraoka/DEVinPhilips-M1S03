// Utilizando function

// function concatena(vetor1, vetor2){
//     return [...vetor1,...vetor2];
// }


//Utilizando arrow function

const concatena = (vetor1, vetor2) => [...vetor1,...vetor2];

const novoArray = concatena([1, 2, 3], [4,5,6]);
console.log(novoArray);