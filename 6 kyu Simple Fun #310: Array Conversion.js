//https://www.codewars.com/kata/5927aabdf3a75890a10000ee/solutions/javascript

function conversion(arr) {
  var dict = Array(26).fill('').reduce(function(acc, el, i){
     acc[(i).toString(26)] = String.fromCharCode(i+97);
     return acc;
  }, {});
  var result = arr.map(function(num){
    return num.toString(26).split('').map(function(d) {
        return dict[d];
    }).join('');
  });
  
  var longest = result.reduce(function(acc, el) {
    return acc > el.length ? acc : el.length;
  }, result[0]);
  var long26 = dict[(longest-1).toString(26)];
  result = result.map(function(el) {
    if (el.length < longest) {
        return  'a'.repeat(longest - el.length) + el;
    } else return el;
  }).join('');
  
  return long26 + result;
}


