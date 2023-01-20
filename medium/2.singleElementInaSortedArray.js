// Single Element in a Sorted Array

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Input: arr = [1,1,2,3,3,4,4,8,8]
// Output: 2

// take the mid and check weather if the mid + 1 or mid -1 are same as mid if yes apply bs in remaining arr   ? else return mid

const singleNonDuplicate = (arr) => {
  let len = arr.length - 1;
  let s = 0;
  let e = len;
  //   boundary checks
  if (e === 0) {
    // if array length is one return arr[0]
    return arr[0];
  } else if (arr[s] !== arr[s + 1]) {
    // checking if the element at the start is the single element
    return arr[s];
  } else if (arr[e] !== arr[e - 1]) {
    // checking if the element at the end is the single element
    return arr[e];
  }

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);
    // checking if the mid is the single element
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return arr[mid];
    }
    if (
      (mid % 2 == 0 && arr[mid] == arr[mid + 1]) ||
      (mid % 2 == 1 && arr[mid] == arr[mid - 1])
    ) {
      // checking the array till the mid does'nt have any single element;
      s = mid + 1;
    } else {
      // if the array till mid contains the single value search in s and e = mid -1
      e = mid - 1;
    }
  }
  return -1;
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
