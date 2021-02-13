// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number <= 1) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive(3));

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialIterative(3));
console.log(findFactorialIterative(1));
