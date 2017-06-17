/*
https://www.codewars.com/kata/simple-fun-number-318-sort-string/javascript
*/
function sortString(s){
    var letters = [], output = '', j = 0;
    var filtered = s.split('').forEach(function(el, i) {
        if (/[a-z]/i.test(el)) {
            letters.push([el, i]);
        }
    });
    var sorted = letters.sort(function(a, b) {
        var diff = a[0].toLowerCase().charCodeAt(0) - b[0].toLowerCase().charCodeAt(0);
        if(diff == 0) {return a[1] - b[1];}
        return diff;
    });
    s.split('').forEach(function(el, i) {
        if (/[a-z]/i.test(s[i])) {
            output += letters[j][0];
            j++;
        } else {
            output += s[i];
        }
    });
    return output;
} 
