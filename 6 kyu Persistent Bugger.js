/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
*/


function persistence(num) {
  var counter = 0;
  while (num > 9) {
    num = num.toString(10).split("").map(Number).reduce(function(a,b) {
        return a*b;
    });
    counter += 1;
  }
  return counter;
   //code me
}
