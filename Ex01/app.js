function procuraMinMax(valores){
    if(!Array.isArray(valores) || !valores.length){
        console.log('Não é possível encontrar');
    } else {
        let max = valores[0];
        let min = valores[0];

        valores.forEach(n => {
            if (n > max){
                max = n;
            } else if (n < min){
                min = n;
            }
        })

        console.log({ min, max });
    }

}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);

procuraMinMax([]);

procuraMinMax([1]);

procuraMinMax(null);

procuraMinMax([1, -1]);

procuraMinMax([-2,-2,-2,-2]);

procuraMinMax([20,10, 30]);
