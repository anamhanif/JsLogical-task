// 1
function depthFirstSearch(tree){
    console.log(tree.value);
    tree.children.forEach(hild=> {
depthFirstSearch(hild);
    });
}
// 2
function breadthFirstSearch(tree){
    const queue =[tree];
    while (queue.length>0) {
        const node = queue.shift();
        console.log(node.value);

        node.children.forEach(child=>{
            queue.push(child);
        });
    }
}
// 3
function doubleTreeValues(tree){
    const newTree ={
        value: tree.value*2,
        children:tree.children.map(child=> doubleTreeValues(child))
    };
    return newTree;
}
// 4
function sumTreeValues(tree) {
    let sum = tree.value;
    tree.children.forEach(child=>{
        sum= sum+ sumTreeValues(child);
    });
    return sum;
}
let tree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 3,
            children: []
          }
        ]
      },
      {
        value: 4,
        children: [
          {
            value: 5,
            children: [
              {
                value: 6,
                children: []
              }
            ]
          }
        ]
      }
    ]
  };
  
  console.log("Depth-first traversal:");
  depthFirstSearch(tree);
  
  console.log("Breadth-first traversal:");
  breadthFirstSearch(tree);
  
  console.log("New tree with doubled values:");
  const doubledTree = doubleTreeValues(tree);
  depthFirstSearch(doubledTree);
  
  console.log("Sum of all values in the tree:", sumTreeValues(tree));

  // Consider you have a tree data structure where each node is an object that has two properties: value (a number) and children (an array of zero or more child nodes). Here's an example of such a tree:

// let tree = {
//   value: 1,
//   children: [
//       {
//           value: 2,
//           children: [
//               {
//                   value: 3,
//                   children: []
//               }
//           ]
//       },
//       {
//           value: 4,
//           children: [
//               {
//                   value: 5,
//                   children: [
//                       {
//                           value: 6,
//                           children: []
//                       }
//                   ]
//               }
//           ]
//       }
//   ]
// };
// Write a function depthFirstSearch that performs a depth-first traversal of the tree and prints each node's value. The function should take a tree as its argument.

// Write a function breadthFirstSearch that performs a breadth-first traversal of the tree and prints each node's value. The function should take a tree as its argument.

// Write a function doubleTreeValues that creates a new tree where the value of each node is double the value of the corresponding node in the original tree. The function should take a tree as its argument and return a new tree. The original tree should not be modified.

// Write a function sumTreeValues that calculates the sum of all values in the tree. The function should take a tree as its argument and return the sum.

// Hint: For tasks 1 and 2, you will likely need to use recursion. For tasks 3 and 4, you can use the solution of task 1 as a starting point and adapt it to suit the needs of the task.

// This problem is designed to test your understanding of recursive functions, data manipulation, and closure in JavaScript.
  

