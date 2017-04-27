//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contains any char.

function XO(str) {
 
  str = str.toLowerCase();
  var o = str.split("o").length;
  var x = str.split("x").length;
  if (o == x) {
    return true;
  }
  return false;
}
}
