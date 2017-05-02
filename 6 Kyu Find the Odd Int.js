/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  //happy coding!
  var counts = {};
  
  for (var i = 0; i < A.length; i++) {
    var num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  for (var key in counts) {
    if (counts[key] % 2) {
      return parseInt(key);
    }
  }
  return 0;
}
