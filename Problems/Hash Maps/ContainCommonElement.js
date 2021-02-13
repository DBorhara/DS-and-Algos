// Given 2 arrays, create a function that lets the user know (true/false) whether these two arrays contain any common items.
// For example:
//const array1 = ['a','b','c','x']
//const array2 = ['z','y','i']\
//Should return false
//------------------
//const array1 = ['a','b','c','x']
//const array2 = ['z','y','x']
//Should return true

//2 parameters
//returns true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

//O(n^2) O(a*b) Brute force
// const conatainCommonElement = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     const elementI = arr1[i];

//     for (let j = 0; j < arr2.length; j++) {
//       let elementJ = arr2[j];

//       if (elementI === elementJ) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

//O(n) O(a+b)
const conatainCommonElement = (arr1, arr2) => {
  let hash = {};

  array1.forEach((element) => {
    hash[element] = true;
  });

  array2.forEach((element) => {
    if (hash[element]) {
      console.log(hash[element]);
      console.log(element)
      return hash[element];
    }
  });


  return false;
};

conatainCommonElement(array1, array2);
