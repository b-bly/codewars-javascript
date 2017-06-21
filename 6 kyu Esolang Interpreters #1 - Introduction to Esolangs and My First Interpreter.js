//https://www.codewars.com/kata/586dd26a69b6fd46dd0000c0/solutions/javascript

function myFirstInterpreter(code) {
  var memory = 0;
  var result = '';
  code.replace(/[^+\.]/g, '').split('')
    .forEach(function(el) {
    el === '+' ? memory += 1 : result += String.fromCharCode(memory);
    if (memory === 256) memory = 0;
  });
  return result;
}
