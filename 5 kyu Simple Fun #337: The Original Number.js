// https://www.codewars.com/kata/simple-fun-number-337-the-original-number
/*ONE               O
TWO   W
THREE            R
FOUR   U
FIVE              F
SIX    X
SEVEN             V
EIGHT   G
NINE                     I
TEN
*/
//rewrite function remove: loop through and replace each letter in a for loop
//to code.match(re).length
//change re in code.match(re) to be the one letter represenation W for two, etc.

function originalNumber(code) {
  var result = [], num, numStr, letterReg, occurences;
  var code = code.split('').sort().join('');

  function remove(num, re) {
    occurences = code.match(re).length;
    for (var i = 0; i < occurences; i++) {
      result.push(num);
    }
    for (var i = 0; i < numStr.length; i++) {
        letterReg = numStr[i].repeat(occurences);
      letterReg = new RegExp(letterReg, "i");
      code = code.replace(letterReg, '');
    }
  }
  if (/z/i.test(code) === true) {
    num = '0';
    numStr = 'zero';
    remove(num, /z/gi);
  }
  if (/W/i.test(code) === true) {
    num = '2';
    numStr = 'two';
    remove(num, /W/gi);
  }
  if (/U/i.test(code) === true) {
    num = '4';
    numStr = 'four';
    remove(num, /U/gi);
  }
  if (/X/i.test(code) === true) {
    num = '6';
    numStr = 'six';
    remove(num, /x/gi);
  }
  if (/G/i.test(code) === true) {
    num = '8';
    numStr = 'eight';
    remove(num, /g/gi);
  }
  if (/O/i.test(code) === true) {
    num = '1';
    numStr = 'one';
    remove(num, /o/gi)
  }

  if (/R/i.test(code) === true) {
    num = '3';
    numStr = 'three';
    remove(num, /r/gi);
  }
  if (/F/i.test(code) === true) {
    num = '5';
    numStr = 'five';
    remove(num, /f/gi);
  }
  if (/V/i.test(code) === true) {
    num = '7'
    numStr = 'seven';
    remove(num, /v/gi);
  }
  if (/I/i.test(code) === true) {
    num = '9';
    numStr = 'nine';
    remove(num, /i/gi);
  }
  if (/t/i.test(code) === true &&
      /e/i.test(code) === true &&
      /n/i.test(code) === true) {
    num = '10';
    numStr = 'ten';
    remove(num, /n/gi);
  }

  return result.sort((a, b)=>a-b).join('');
}
