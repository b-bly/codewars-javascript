//https://www.codewars.com/kata/esolang-minibitmove/train/javascript



function interpreter(tape, array) {
  var j = 0;
  var tapeLength = Math.ceil(array.length / tape.length);
  for (var i = 0; i < tapeLength; i++) {
      tape += tape;
  }
  return array.toString(10).split('').map(function(el, i) {
    if (tape[j] === '0') {
        j++;
        return el;
    }
    while (tape[j] === '1') {
        el = el === '1' ? '0' : '1';
        j++;
    }
    j++;
    return el;
  }).join('');
}
