//https://www.codewars.com/kata/running-average/train/javascript

function runningAverage() {
  var times = [];
  var avg = function() {
    
    times.push(arguments[0]);
    return Math.round(times.reduce((a, b)=>a+b)/times.length * 100)/100;
  }
  return avg;
}
