// ## Merge Sorting

// Divide and Conquer Sorting ( Uses Recursion )
// O(n log n)
// "The Root Splitter"
// Break down array into individual elements than "merge" back together in order
// Typically performs better than most algorithms
// It is stable(equivalent elements keep order)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function merge(arr1, arr2) {
  let arr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }
  return arr.concat(arr1.slice().concat(arr2.slice()));
}

function mergeSort(arr) {
  //Base Case
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // Recursive Case
  return merge(mergeSort(left), mergeSort(right));
}

const answer = mergeSort(numbers);
console.log(answer);
