

const factorail = (number) => {

    if(number === 1){
        return 1;
    }else{
        return number * factorail(number - 1);
    }

}


const result = factorail(4);

console.log(result);