/*
Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 21445 Output: 54421
*/

function descendingOrder(n){
  return parseInt((''+n).split('').sort(function(a, b) {
    return b - a;
  }).join(''));
  
}
