const moduloRecursivo = (dividendo, divisor) => {

    if(dividendo < divisor){
        return dividendo;
    }else{
        return moduloRecursivo(dividendo - divisor, divisor);
    }

}

const result = moduloRecursivo(1, 3);

console.log(result);