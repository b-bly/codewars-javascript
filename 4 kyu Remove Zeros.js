//https://www.codewars.com/kata/remove-zeros

function removeZeros(array) {
  var zero, nextZeroIndex = array.length -1;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0 || array[i] === '0') {
      zero = array[i];
      for (var j = i; j < nextZeroIndex; j++) {
        array[j] = array[j+1];
      }
      array[nextZeroIndex] = zero;
      nextZeroIndex--;
      //array[array.length - counter] = array.splice(i, 1);
    }
  }
  return array;
}
