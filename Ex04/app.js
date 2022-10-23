//Use function

function mesclaObjetos(valor1, valor2){
    return {...valor1, ...valor2};
}


const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);
