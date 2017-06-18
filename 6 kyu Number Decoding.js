//https://www.codewars.com/kata/number-decoding/train/javascript

function decode(number){
  var word;
    number = number.toString(10).split('98').map(function(el, i, arr) {
      if (el === '') return el;
      if (i % 2 === 1) { 
        return parseInt(el, 2) + '';
      } else if (i % 2 === 0) {
        return el.match(/.{1,3}/g).reduce(function(acc, letter) {
          return acc + String.fromCharCode(letter - 4);
        }, '');
      } else { return el;}
    }).filter((el)=>el !== '');
    
    return number.join(', ');
}
