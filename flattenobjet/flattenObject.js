function flattenObject(obj, parent) {
    const finalObj = {};
  
    const generateFlatObjects = (obj, parent) => {
      for (let key in obj) {
        const newParent = parent + "." + key;
        const value = obj[key];
        if (typeof value === 'object') {
          generateFlatObjects(value, newParent);
        } else {
          finalObj[newParent] = value;
        }
      }
    };
  
    generateFlatObjects(obj, parent);
    return finalObj;
  }
  
  let nestedObject = {
    name: "John",
    info: {
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        postalCode: "10001",
        coordinates: {
          latitude: "40.7128 N",
          longitude: "74.0060 W"
        }
      },
      hobbies: ["reading", "traveling", "swimming"]
    }
  };
  
  console.log(flattenObject(nestedObject, ""));
//   Consider you have a deeply nested object where each key might correspond to a value that is a primitive (string, number, etc.), an array, or another object. Here's an example of such an object:

// let nestedObject = {
//     name: "John",
//     info: {
//         age: 30,
//         address: {
//             street: "123 Main St",
//             city: "New York",
//             postalCode: "10001",
//             coordinates: {
//                 latitude: "40.7128 N",
//                 longitude: "74.0060 W"
//             }
//         },
//         hobbies: ["reading", "traveling", "swimming"]
//     }
// };
// Your task is to write a function flattenObject that takes a deeply nested object as its argument and returns a new object where:

// All keys in the new object are the paths to the corresponding values in the original object. For example, the value "10001" in the original object has the path "info.address.postalCode", so in the new object, there should be a key "info.address.postalCode" with the value "10001".
// The paths are built by joining the keys at each level with a dot ('.').
// If a value in the original object is an array, it should be left as an array in the new object.
// Here's an example of how the new object might look for the nestedObject above:

// {
//     "name": "John",
//     "info.age": 30,
//     "info.address.street": "123 Main St",
//     "info.address.city": "New York",
//     "info.address.postalCode": "10001",
//     "info.address.coordinates.latitude": "40.7128 N",
//     "info.address.coordinates.longitude": "74.0060 W",
//     "info.hobbies": ["reading", "traveling", "swimming"]
// }
// This problem tests your understanding of object manipulation, recursion, and string handling in JavaScript.