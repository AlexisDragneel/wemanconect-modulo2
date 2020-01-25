



function maxValueRecursive(data, index, maxValue) {
    if( data.length  <= index ) {
        return maxValue;
    }else{
        maxValue = maxValue < data[index] ? data[index] : maxValue;
        return maxValueRecursive(data, index + 1, maxValue);
    }
}

const result = maxValueRecursive([1, 5, 20, 6, 9],0, 0);


console.log(result);

[].le