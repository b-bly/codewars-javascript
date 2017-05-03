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
    
