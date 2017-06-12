/*
The look and say sequence is a sequence in which each number is the result of a "look and say" operation on the previous.

Considering for example the classical version startin with 1: ["1","11","21,"1211","111221",...]. You can see that the second element describes the first as "1(times number)1", the third is "2(times number)1" describing the second, the fourth is "1(times number)2(and)1(times number)1" and so on.

Your goal is to create a function which takes a starting string (not necessarily the classical "1", much less a single character start) and return the nth element of the series.

For example:

lookAndSaySequence("1",1)   === "1"
lookAndSaySequence("1",3)   === "21"
lookAndSaySequence("1",5)   === "111221"
lookAndSaySequence("22",10) === "22"
lookAndSaySequence("14",2)  === "1114"
Trivia: "22" is the only element that can keep the series constant.
*/
function lookAndSaySequence(firstElement, n){
  var re = /(\d)\1{1,}|\d{1}/g;
  var seq = firstElement;
  for (var i = 1; i < n; i++) {
    seq = seq.match(re).map(function(v, i, a) {
      return String(v.length) + v[0];
    }).join('');
  }
  return seq;
}
