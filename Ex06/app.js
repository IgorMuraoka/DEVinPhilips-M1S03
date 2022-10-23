verificaPalindromo = nome => {
    const nomeInverso = nome.split('').reverse().join('');
    return nome == nomeInverso? true : false;
}

console.log(verificaPalindromo('ana'));

console.log(verificaPalindromo('julia'));