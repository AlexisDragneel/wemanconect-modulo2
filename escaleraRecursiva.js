const escaleraRecursiva = (input, index) => {
    if(index > input.length) {
        if(input.length > 0){
            console.log(input.substring(0, input.length + 1));
        }
        return;
    } else {
        console.log(input.substring(0, ++index));
        input = input.slice(index, input.length);
        escaleraRecursiva(input, index);
    }

}

escaleraRecursiva("HelloWorld!", 0)
