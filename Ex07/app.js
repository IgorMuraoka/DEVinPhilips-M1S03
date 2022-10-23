function classifica(a){
    const {nome, idade, profissao} = a;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

const pessoa = classifica({
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  });

  console.log(pessoa);