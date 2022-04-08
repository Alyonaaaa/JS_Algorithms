"use strict"; 

// 66%
function solution(A) {
  // create object like { '3': 2, '7': 1, '9': 4 }, showing occurencies
  let count = {};
  A.forEach(key => count[key] = ++count[key] || 1);
  // A.forEach(key => count[key] ? count[key]++ : count[key] = 1); same

  // Create array of keys of obj.count with Object.keys(count)
  // filter array by checking if the key's value is equal to 1
  // Returns that (only one) +key in filtered array (+key to ensure it is number)
  let filteredA = Object.keys(count).filter(key => count[key] == 1);
  return  +filteredA[0] || null;
}

console.log(solution([9, 3, 9, 3, 9, 3, 9]));

// 66%
function solution(A) {
  // create object like { '3': 2, '7': 1, '9': 4 }, counting occurencies of each A[]
  let count = {};
  // A.forEach(key => count[key] ? count[key]++ : count[key] = 1); or:
  A.forEach(key => count[key] = ++count[key] || 1);

  // return key with count[key]=1
  for(let key in count) {
    if(count[key] == 1) {
      return +key;
    }
  }
}
console.log((solution([9, 3, 9, 3, 9, 7, 9]));

//100%
function solution(A) {
  A = A.sort();

  let val = A[A.length - 1];
  for (let i = 0; i < (A.length - 1) / 2; i++) {
    if (A[i * 2] !== A[i * 2 + 1]) {
      val = A[i * 2];
      break;
    }
  }
  return val;
}
console.log((solution([9, 3, 9, 3, 9, 7, 9]));


// how does this work?
// let count = {};
// A.forEach(key => count[key] ? count[key]++ : count[key] = 1); or:
// A.forEach(key => count[key] = ++count[key] || 1);
// for each element of array call callback-f.
// and return callBackRun
//                          fill in empty obj with property structure given by "count[key]"(as key.value) => A[](as key): 
//                          checking if after every callBackRun count[key] > 0. If not, give 1, else ++.
// arr.el.-> callback Run   key: count[key]  check  -> action    key: count[key]  real key:count[key]
// A[0] = 9; -> 1           9:   0           !> 0   -> 1         9: 1             3: 2
// A[1] = 3; -> 1           3:   0           !> 0   -> 1         3: 1             7: 1
// A[2] = 9; -> 1           9:   1           >  0   -> ++        9: 2             9: 4
// A[3] = 3; -> 1           3:   1           >  0   -> ++        3: 2
// A[4] = 9; -> 1           9:   2           >  0   -> ++        9: 3
// A[5] = 7; -> 1           7:   0           !> 0   -> 1         7: 1
// A[6] = 9; -> 1           9:   3           >  0   -> ++        9: 4

function transfer(arr){
  let counter = 0;
  arr.forEach((el) => el? counter++ : null);
  return counter;
}
console.log(transfer(['9', '3', "6"]));