
 /* The JavaScript array object is used to store multiple values in a single variable. JavaScript offers several methods that allow you to manipulate arrays in various ways.

Your task is to write a JavaScript function named processArray that takes in two parameters:

An array of integers numbers
A string operation that represents the name of the array method you will use on the numbers array.
The operation parameter can take the following values: 'filter', 'reduce', 'map', and 'sort'. Depending on the value of the operation parameter, your function should execute the following behaviors:

If operation is 'filter', the function should return a new array that contains only the even numbers from the numbers array.
If operation is 'reduce', the function should return the sum of all elements in the numbers array.
If operation is 'map', the function should return a new array where each element is the square of the corresponding element in the numbers array.
If operation is 'sort', the function should return a new array that is a sorted version of the numbers array in ascending order.
If the operation string does not match any of the values listed above, the function should return the string "Invalid operation".
Constraints:

The numbers array can contain up to 10^6 elements.
Each element in the numbers array will be an integer that fits within the JavaScript Number type.
The operation string will be non-empty and contain only lowercase English alphabetic characters.
You may assume that the built-in JavaScript array methods work as expected.
You are not allowed to use any external libraries or packages. Your solution should only use built-in JavaScript functions and features.

 */


function processArray(numbers, operation) {
    switch(operation){
        case 'filter':
            return numbers.filter(num => num %2 === 0);
            case 'reduce':
                return numbers.reduce((sum,num)=> sum+num, 0);
                case 'map':
                    return numbers.map(num => num*num);
                    case 'sort':
                        return numbers.slice().sort((a,b)=> a+b);
                        default:
                            return "Invalid Operation";
    }
}
const numbers = [1,2,3,4,5];
console.log(processArray(numbers, 'filter')); 
console.log(processArray(numbers, 'reduce')); 
console.log(processArray(numbers, 'map'));   
console.log(processArray(numbers, 'sort'));   
console.log(processArray(numbers, 'invalid')); 