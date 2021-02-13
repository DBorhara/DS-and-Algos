// SquareRoot(x)
//SquareRoot(4) = 2
//SquareRoot(16) = 4
//SquareRoot(8) = 2

function squareRoot(num) {
  //iterative
  // for (let i = 0; i < num; i++) {
  //   let curNum = num[i];
  //   let nextNum = num[i + 1];
  //   let curNumSquared = curNum * curNum;
  //   let nextNumSquared = nextNum * nextNum;
  //   if (curNumSquared === num) {
  //     return curNum;
  //   }
  //   if (curNumSquared < num && nextNumSquared > num) {
  //     return curNum;
  //   }
  // }
  //  0, 1, 2, 3, 4, 5, 6, 7, 8
  //  L           M           H
  //  L     M     H
  //        L  M  H
  //        L  H

  //Binary Search
  let mid = num / 2;
  let high = num;
  let low = 0;

  while (low + 1 !== high) {
    mid = mid - (mid % 1);
    if (mid * mid === num) {
      return mid;
    }
    console.log('mid', mid);
    console.log('high', high);
    console.log('low', low);
    if (mid * mid > num) {
      high = mid;

      mid = (high + low) / 2;
    }
    if (mid * mid < num) {
      low = mid;
      mid = (high + low) / 2;
    }
  }
  return low;
}

console.log(squareRoot(5));
console.log(squareRoot(13));
console.log(squareRoot(16));
