function flattenArray(nestedArray) {
    return nestedArray.reduce((flattenedArray, element) => {
      if (Array.isArray(element)) {
        return flattenedArray.concat(flattenArray(element));
      } else {
        return flattenedArray.concat(element);
      }
    }, []);
  }
  
  function calculateSum(array) {
    return array.reduce((sum, element) => sum + element, 0);
  }
  
  function transformAndSum(nestedArray) {
    const flattenedArray = flattenArray(nestedArray);
    const sum = calculateSum(flattenedArray);
    return sum;
  }
  
  let nestedArray = [1, [2, 3], [[4, 5], [6, 7]], 8, [9, [10, 11, [12, 13, [14, 15]]]]];
  let flattenedArray = flattenArray(nestedArray);
  let sum = calculateSum(flattenedArray);
  let transformedSum = transformAndSum(nestedArray);
  
  console.log("Flattened Array:", flattenedArray);
  console.log("Sum of Flattened Array:", sum);
  console.log("Transformed Sum:", transformedSum);


  /* 
  This problem challenges your ability to work with complex data structures, implemenConsider a potentially deeply nested array of integers, for example:

let nestedArray = [1, [2, 3], [[4, 5], [6, 7]], 8, [9, [10, 11, [12, 13, [14, 15]]]]];
Write a function called flattenArray() that accepts the deeply nested array as an argument and returns a new, single-level array that contains all of the integer values from the original, nested array, preserving the order.
For the nestedArray above, the function should return:

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
Write a second function named calculateSum() that takes the flattened array as an argument and returns the sum of all the integers in the array.

Write a third function named transformAndSum() that combines the above two operations. It should accept a deeply nested array, transform it to a flat array, and then calculate and return the sum of all the integers.

Hint: You might need to use recursion in your flattenArray() function to deal with arrays that are nested to an arbitrary depth.t recursion, and manipulate arrays in JavaScript.
  /*
  