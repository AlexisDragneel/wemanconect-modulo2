const binarySearch = (array, item) => {

    const recurse = (min, max) => {
  
      if (min > max) {
        return -1;
      }
  
      var middle = Math.floor((min + max) / 2);
  
      if (array[middle] === item) {
        return middle;
      }
  
      if (array[middle] > item) {
        return recurse(min, middle - 1);
      }
  
      return recurse(middle + 1, max);
    }
  
    return recurse(0, array.length - 1);
  }
  
  
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 8)); // 5
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 7)); // -1
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 9)); // 6
  console.log(binarySearch([1], 0)); // -1