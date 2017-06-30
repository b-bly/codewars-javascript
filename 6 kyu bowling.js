//https://www.codewars.com/kata/bowling-pins/train/javascript

function bowlingPins(arr){
  var pins = [['I', ' ', 'I', ' ', 'I', ' ', 'I'],
            [' ', 'I', ' ', 'I', ' ', 'I', ' '],
            ['  ', 'I', ' ', 'I', '  '],
            ['   ', 'I', '   ']];
  var num = {'1': [3, 1], '2': [2, 1], '3': [2,3], '4': [1, 1], 
            '5': [1, 3], '6': [1, 5], '7': [0, 0], '8': [0, 2],
            '9': [0, 4], '10': [0, 6]};
  var x, y;
  arr.forEach(function(n) {
     y = num[n][0];
     x = num[n][1];
    pins[y][x] = ' ';
  });
  pins = pins.map(function(el) {
    return el.join('');
  }).join('\n');
  return pins;
}
