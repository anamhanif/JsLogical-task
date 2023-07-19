/* In JavaScript, arrays have several built-in methods to perform different operations. Your task is to demonstrate your understanding of these methods by completing the following task:

Create a JavaScript function named arrayManipulator which takes three parameters:

An array of strings, words.
A string, method, representing the array method you will implement.
A string, item, which is used based on the method requirement.
The method parameter will take one of these four values: 'includes', 'indexOf', 'join', or 'reverse'. Your function should perform the following actions based on the method value:

If method is 'includes', your function should return a boolean value indicating whether or not the item exists in words.
If method is 'indexOf', your function should return the index of the item in the words array. If item is not found, return -1.
If method is 'join', your function should return a string that is the concatenation of all the elements in words, separated by the item string.
If method is 'reverse', your function should return a new array which is the reverse of the words array. The item parameter is not used in this case.
If the method string does not match any of the values listed above, return the string "Invalid method".
Constraints:

The words array will contain up to 10^4 elements.
Each element in words will be a string of maximum length 100.
The method string will be non-empty and will only contain lowercase English alphabetic characters.
The item string will be of maximum length 100.
You may assume that built-in JavaScript array methods work as expected.
Your solution should only use built-in JavaScript methods and features, no external libraries or packages are allowed.*/



function arrayManipulator(words, method, item) {
    switch (method) {
      case 'includes':
        
        return words.includes(item);
        
      case 'indexOf':
       
        return words.indexOf(item);
        
      case 'join':
        
        return words.join(item);
        
      case 'reverse':
        
        return words.slice().reverse();
        
      default:
        return "Invalid method";
    }
  }
//example 
const words = ['Lion', 'horse', 'zebra', 'monkey' ,'jaraf'];
console.log(arrayManipulator(words, 'includes', 'lion'));
console.log(arrayManipulator(words, 'indexOf', 'monkey'));   
console.log(arrayManipulator(words, 'join', ', '));         
console.log(arrayManipulator(words, 'reverse'));            
console.log(arrayManipulator(words, 'invalid', 'item'));   
//node sript.js for run file