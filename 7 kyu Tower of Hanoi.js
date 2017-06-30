//https://www.codewars.com/kata/tower-of-hanoi-3/train/javascript

function towerOfHanoi(rings){
  var i = 0;
  var r = 0;
  function nextRing(r) {
    r = 2*r + 1;
    i++;
    if (i < rings) {
      return nextRing(r);
    }
    return r;
  }
  return nextRing(r);
}
