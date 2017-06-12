/*
Kontti language is a finnish word play game, you add -kontti to the end of a word and then switch their first letters until the first vowel (as in "aeiouy"); if no vowel is present, the word stays the same.

For example the word lamppu becomes komppu-lantti; aeiou becomes koeiou-antti and so on.

Write a string method that turns a sentence into a kontti sentence!

*/

String.prototype.kontti = function(){
    function replacer(match, p1, p2, p3, offset, string) {
        return 'ko' + p2 + '-' + p1 + 'ntti';
    }
    return this.split(/\s/g).map(function(v, i, arr) {
        return v.replace(/(^[^aeiouy]*[aeiouy])(\w*)/, replacer);
    }).join(' ');   
}
