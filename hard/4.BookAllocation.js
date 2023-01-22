// Allocate minimum number of pages

// => question

// Given a number of pages in N different books and M students. The books are arranged in ascending order of the number of pages. Every student is assigned to read some consecutive books. The task is to assign books in such a way that the maximum number of pages assigned to a student is minimum.

// => example

// Input : pages[] = {12, 34, 67, 90} , m = 2
// Output : 113
// Explanation: There are 2 number of students. Books can be distributed in following fashion :
// 1) [12] and [34, 67, 90]
// Max number of pages is allocated to student ‘2’ with 34 + 67 + 90 = 191 pages
// 2) [12, 34] and [67, 90] Max number of pages is allocated to student ‘2’ with 67 + 90 = 157 pages
// 3) [12, 34, 67] and [90] Max number of pages is allocated to student ‘1’ with 12 + 34 + 67 = 113 pages

// Of the 3 cases, Option 3 has the minimum pages = 113.

// Link => https://www.geeksforgeeks.org/allocate-minimum-number-pages/

const bookAllocation = (books, m) => {
  let s = Math.min(...books);
  let e = books.reduce((item, accu) => item + accu, 0);
  let arr = [];
  while (s < e) {
    let mid = Math.floor(s + (e - s) / 2);
    let sum = 0;
    let count = 1;
    for (let i = 0; i < books.length; i++) {
      if (sum + books[i] > mid) {
        sum = books[i];
        count++;
      } else {
        sum += books[i];
      }
    }
    if (count > m) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return s;
};

console.log(bookAllocation([12, 34, 67, 90], 2));

function solve() {
  var i = 0;
  var sum = 0;
  while (i < 100) {
    sum = sum + i;
    sum = i + sum;
    i++;
  }
  console.log(sum);
}
solve();

const arr = new Array();
arr.push(2);
arr.push(3);

console.log(arr);
