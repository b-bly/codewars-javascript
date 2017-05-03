/*

Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
*/

function scramble(str1, str2) {    
    var arr2 = str2.split('');
    var counts2 = {};
    var letter;
    var counts1 = {};
    
    for(var i = 0; i< arr2.length; i++) {
        letter = arr2[i];
        counts2[letter] = counts2[letter] ? counts2[letter]+1 : 1;
    }

    for (letter in counts2) {
        var matches = str1.split(letter).length - 1;
        counts1[letter] = matches ? matches : 0;

        if (counts1[letter] < counts2[letter]) {
        return false;
        }
      }
     return true;
    }
    
