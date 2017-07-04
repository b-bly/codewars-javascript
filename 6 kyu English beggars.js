//https://www.codewars.com/kata/english-beggars/train/javascript

function beggars(values, n){
  var result = '0'.repeat(n).split('').map(function(t) {
      return parseInt(t)
    });
  for (var i = 0; i < n; i++) {
    for (var j = i; j < values.length; j+= n) {
      result[i] += values[j];
    }
  }
  return result;
}

