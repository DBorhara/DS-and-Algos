//Given an array an a sum, create a function that lets the user know(true/false) whether two numbers in the array add up to the sum.
//For example:
// const array = [1,2,3,4,5]
// sum = 10
// Should return false
// ------------------
// const array = [1,2,3,4,5]
// sum = 8
// Should return 2

// 2 parameters
// returns true or false

//Brute Force O(n^2) O (a*b)
// const hasPairWithSum = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         console.log(true);
//         return true;
//       }
//     }
//   }
//   console.log(false);
//   return false;
// };

const array = [1, 2, 3, 4, 5];
let sum = 9;
//Improved - Similar to TwoSum
const hasPairWithSum = (arr, sum) => {
  //Create a cache
  let cache = {};

  //Loop through the array
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i]; // curNum = arr[0] === 6
    let difference = sum - curNum; // 9-6=3

    if (cache[difference] !== undefined) {
      //if(cache[3] is defined, doesnt matter to what)
      return true;
    } else {
      //
      cache[curNum] = 'defined'; //cache[6] = 0 or cache = {6:0}
    }
  }
  return false;
};

hasPairWithSum(array, sum);
