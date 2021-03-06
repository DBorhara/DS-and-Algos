function fibonacci(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(40));

function fibMemoized() {
  // O(n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fastFib = fibMemoized();

console.log(fastFib(40));
