/*
https://www.codewars.com/kata/multiples-by-permutations-i/train/javascript
*/

function search_permMult(nMax, k) {
var numArr, check, product, index, results = 0;
  for (var i = 1; i*k <= nMax; i++) {
    numArr = i.toString(10).split('');
    product = (i * k).toString(10).split("");
    if (product.length === numArr.length){
        check = product.filter(function(el) {
          index = numArr.indexOf(el);
          if (index >= 0) {
            numArr[index] = '';
            return true;
          } return false;
        }).length;
        if (check === numArr.length) {;
          results += 1;
        }
    }
  }
  return results;
}


