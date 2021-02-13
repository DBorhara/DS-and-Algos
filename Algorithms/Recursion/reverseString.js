//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let arr = str.split('');
  let answer = [];

  for (let i = arr.length; i >= 0; i--) {
    const element = arr[i];
    answer.push(element);
  }
  return answer.join('');
}

console.log(reverseStringIterative('yoyo mastery'));
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {}

reverseStringRecursive('yoyo mastery');
//should return: 'yretsam oyoy'
