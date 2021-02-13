// ## Selection Sorting - Elementary Sort

// We bubble down the lowest number
// O(n^2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// eslint-disable-next-line no-warning-comments
// TODO WHITEBOARD IT
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);