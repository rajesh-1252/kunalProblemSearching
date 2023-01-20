// Split Array Largest Sum

const splitArray = (arr, m) => {
  let s = Math.max(...arr);
  let e = arr.reduce((item, accu) => {
    return item + accu;
  }, 0);
  while (s < e) {
    let mid = Math.floor(s + (e - s) / 2);
    let sum = 0;
    let pieces = 1;
    for (let elem of arr) {
      if (sum + elem > mid) {
        sum = elem;
        pieces++;
      } else {
        sum += elem;
      }
    }
    if (pieces > m) {
      // we took small sum so we need to increase the sum
      s = mid + 1;
    } else {
      // we took greater some so we need to increase it
      e = mid;
    }
  }
  return e;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
