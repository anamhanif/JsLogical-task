/* The JavaScript Array object has several built-in methods to manipulate arrays in a variety of ways. These methods include operations like adding, removing, and finding elements in an array.

Your task is to create a JavaScript function called manageArray. This function will accept three parameters:

An array of integers called arr.
A string method that corresponds to the array method you'll apply on the arr.
An integer element, which is used as needed depending on the method.
The method parameter can have four possible values: 'push', 'pop', 'shift', and 'unshift'. Your function should behave as follows, depending on the value of the method parameter:

If method equals 'push', your function should add the element to the end of arr and return the new array.
If method equals 'pop', your function should remove the last element from arr and return the new array.
If method equals 'shift', your function should remove the first element from arr and return the new array.
If method equals 'unshift', your function should add the element to the beginning of arr and return the new array.
If the method string does not match any of the above values, the function should return the string "Invalid method".
Constraints:

The arr array will have at most 10^4 elements.
Each element in arr will be an integer that fits within the JavaScript Number type.
The method string will be non-empty and will only contain lowercase English alphabetic characters.
The element parameter will be an integer that fits within the JavaScript Number type.
Assume the built-in JavaScript array methods work as described in the ECMAScript standard.
You are not permitted to use any external libraries or packages. Your solution should only use JavaScript's built-in functions and features.*/

function manageArray(arr, method, element) {
    switch (method) {
      case 'push':
       
        return arr;
        
      case 'pop':
       
        arr.pop();
        return arr;
        
      case 'shift':
       
        arr.shift();
        return arr;
        
      case 'unshift':
        
        arr.unshift(element);
        return arr;
        
      default:
        return "Invalid method";
    }
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  
  console.log(manageArray(numbers, 'push', 6));    
  console.log(manageArray(numbers, 'pop'));        
  console.log(manageArray(numbers, 'shift'));      
  console.log(manageArray(numbers, 'unshift', 0)); 
  console.log(manageArray(numbers, 'invalid', 7)); 
  //for run ile node script.js
  