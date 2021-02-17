function addTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('Long Time');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized80 = addTo80();
console.log(memoized80(5));
console.log(memoized80(5));
console.log(memoized80(5));
