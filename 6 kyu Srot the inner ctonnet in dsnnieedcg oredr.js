/*
You have to sort the inner content of every word of a string in descending order.
The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me" -> "wiat for me"
"this kata is easy" -> "tihs ktaa is esay"
The string will never be null and will never be empty.
It will contain only lowercase-letters and whitespaces. 


Have fun coding it and please don't forget to vote and rank this kata! :-)
*/
function sortTheInnerContent(words) {
    var vInner;
    return words.split(' ').map(function(v) {
        if (v.length === 1) {return v;}
        vInner = v.split('').slice(1, v.length - 1).sort(function (a, b) {
            return b.charCodeAt(0) - a.charCodeAt(0);
        }).join('');
        return v[0] + vInner + v[v.length - 1];
    }).join(' ');
}
