//Use Function

// function somaTudo(...valores){
//     let sum = 0;
//     valores.forEach(n => sum +=n);
//     return sum;
// }

//Use arrow function

const somaTudo = (...valores) =>{
    let sum = 0;
    valores.forEach(n => sum +=n);
    return sum;
}

const resultado = somaTudo(1,2,3,4);
console.log(resultado);