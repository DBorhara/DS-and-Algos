// Take two sorted arrays and merge them to one sorted array
//[1,3,5] [2,4,6]

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;

  //Check input
  //Check if both are arrays
  //Check if either arrays are empty
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arrayItem1 || arrayItem2) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      mergedArray.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      mergedArray.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }

  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([0,2,4,6,8,10],[1,3,5,7,9])
