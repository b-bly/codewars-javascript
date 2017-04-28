
 //sum multiples of 3 and 5 in number
 
function solution(number){
    for(var sum = 0, i = 1; i < number; i++) {
        if (!(i % 3 && i % 5)) {
            sum += i;
        }
    }
    return sum;
}

// couldn't use solution2 because the array length limit was exceeded
//in tests (length > 2^32).

function solution2(number){
  //sum multiples of 3 and 5 in number
  var arr = (Array.from(Array(number-1).keys())).map(function(x) {
    return ++x;
  });
  arr = arr.filter(function(element) {
    return (!Boolean(element % 3) || !Boolean(element % 5));
    });
    
  var sum = arr.reduce(add);
  return sum;
  
  function add(a,b) {
      return a+b;
  }
}
