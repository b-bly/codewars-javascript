/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'

*/

function duplicateCount(n) {
    n = n.toLowerCase().split('');
  var obj = {};
  n.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  var count = 0;
  for (var prop in obj) {
      if (obj[prop] > 1) {
          count += 1;
      }
  }
  return count;
}
