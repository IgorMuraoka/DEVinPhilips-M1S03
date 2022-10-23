function procuraMinMax([...valores]){
    let min = Infinity;
    let max = -999;
    valores.forEach(n => {
        if (n > max){
            max = n;
        } else if (n < min){
            min = n;
        }
    })
    if(max == -999){
        max = 'Não foi possível encontrar'
    }
    if(min == Infinity){
        min = 'Não foi possível encontrar'
    }

    return console.log(`Maior valor: ${max}
Menor valor: ${min}`);
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);

procuraMinMax([]);

procuraMinMax([1]);

procuraMinMax(null);

procuraMinMax([1, -1]);

procuraMinMax([-2,-2,-2,-2]);

procuraMinMax([20,10, 30]);
