//https://www.codewars.com/kata/526a569ca578d7e6e300034e/solutions/javascript


function convert(input, source, target)  {
  var converted = '';
  var srcBase = source.length;
  input = input.split("").reverse().reduce(function(acc, n, i) {
    n = source.indexOf(n);
      return acc + (n*Math.pow(srcBase, i));
  }, 0);
  var targetBase = target.length;
  while (input/targetBase >= 1) {
      converted += target[(input % targetBase)];
      input = Math.floor(input / targetBase);
  }
  return (converted + target[(input % targetBase)]).split('').reverse().join('');
}
