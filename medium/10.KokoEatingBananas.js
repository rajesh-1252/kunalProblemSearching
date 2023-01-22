// 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.
// given data

// koko can't eat more than one pile per hour which means if the koko complete one pile in 10 minutes it has to wait for remaing 50mintues to eat the next pile

// koko likes to eat slow => which means it has to eat efficently by calculating the hour that it has. so koko does'nt want to eat all the bananas in one hour and wait for remaining hours to digest instead koko wants to use the entire time (h) to eat banana

// we want to calculate the eating speed (k) to koko such that it can eat all the banana in the given hour(h)

// given k = banana eating per hour
// function expression
const minEatingSpeed = (piles, h) => {
  let s = 1;
  let e = Math.max(...piles);
  let mid;
  if (piles.length === 1) {
    return Math.ceil(piles[0] / h);
  }
  while (s <= e) {
    // mid is k here banana per hour
    mid = Math.floor(s + (e - s) / 2);
    let count = 0;
    for (let i = 0; i < piles.length; i++) {
      if (piles[i] > mid) {
        count += Math.ceil(piles[i] / mid);
      } else {
        count += 1;
      }
    }
    console.log({ count, mid });

    if (count > h) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  // why i returned s ?
  return s;
};
console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));

// console.log(minEatingSpeed([1, 1, 1, 999999999], 10));
