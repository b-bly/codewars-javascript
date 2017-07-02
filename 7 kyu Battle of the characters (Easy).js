//https://www.codewars.com/kata/595519279be6c575b5000016/solutions/javascript

function battle(x, y) {
  var xPoints = x.match(/[A-Z]/g).reduce(function(acc, letter) {
    return acc + letter.charCodeAt(0);
  }, 0);
  var yPoints = y.match(/[A-Z]/g).reduce(function(acc, letter) {
    return acc + letter.charCodeAt(0);
  }, 0);
  console.log("x " +xPoints);
  console.log("y " + yPoints);
  if (xPoints > yPoints) return x;
  if (yPoints > xPoints) return y;
  else return "Tie!";
}
