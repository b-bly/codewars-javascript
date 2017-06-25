//https://www.codewars.com/kata/594cd799c08247a55a000004/solutions/javascript/me/best_practice

function isJohnLying(a,b,s){
  var c = Math.abs(a) + Math.abs(b);
  if (c % 2 === s % 2 &&
  s >= c) return true;
  return false;
  
}
