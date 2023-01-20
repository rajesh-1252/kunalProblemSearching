// Capacity To Ship Packages Within D Days

const shipWithinDays = (weights, days) => {
  // we are shiping each item in the weights array so the minimum weight that we can ship per day is the maximum number of weight in the array
  // eg weights= [5,5,5,5,5] days = 5 in this case we are not in hurry we can daily ship one item and eventually we'll ship the 5 items in 5 days so this is the lower bound // efficently shiping according to the days
  let s = Math.max(...weights);

  let e = weights.reduce((item, accu) => {
    return item + accu;
  }, 0);
  // the maximum number of weight that we can ship per day is sum of all the arrays
  // eg: [5,5,5,5,5] days = 1 in this case we are in hurry to ship all the items in one day so we can't ship it one by one so we add all the item in a array and ship it
  while (s < e) {
    let mid = Math.floor(s + (e - s) / 2);
    // this mid is the total number of weight that we can ship in  a day
    // we are trying this weight and we'll adjust the weight according to the pieces(day) that we get
    let sum = 0;
    // this sum is the item that we are shiping in a day
    let pieces = 1;
    // this pieces there for making count and making sure that we shouldn't exceed or bellow the days

    for (let key of weights) {
      // we are looping through each item in the array and adding it to the sum and the condition is if the sum exceeds the mid ? then don't add any futher to the same sum create a new sum and add to it so (sum = key) and increase the pieces by 1 since the maximum weight per day exceeds so we need to send the remaining goods on the next day so increase the pieces (here pieces is day)
      if (sum + key > mid) {
        sum = key;
        pieces++;
      } else {
        // if not the sum is greater than mid add the weight to the sum
        sum += key;
      }
    }
    // what does it mean when the pieces is greater than the given days ? it means we can have more sum and reduce the piece
    if (pieces > days) {
      s = mid + 1;
    } else {
      // what does it mean when the pieces is less than the given days ? it means we are shipping too much weight a day and we can reduce it ? it ? what it ? we can reduce the sum we are shipping ;
      e = mid;
    }
  }
  return s;
};
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([5, 5, 5, 5, 5], 5));
