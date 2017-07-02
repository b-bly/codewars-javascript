//https://www.codewars.com/kata/is-this-a-triangle/train/javascript

function isTriangle(a,b,c) {
  var sides = [a, b, c].sort((a, b)=>a-b);
  if (sides[0] + sides[1] > sides[2]) return true;
   return false;
}
