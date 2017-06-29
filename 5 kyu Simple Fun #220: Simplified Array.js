//https://www.codewars.com/kata/simple-fun-number-220-simplified-array/train/javascript

function simplifiedArray(arr) {
    function isPrime(num) {
        if (num < 2) return false;
        var s = Math.sqrt(num);
      for(var i = 2; i <= s; i++)
        if(num % i === 0) return false;
      return num !== 1;
    }
    
    function sum(a) {
        return a.reduce(function(acc, val) {
            return acc + val;
        }, 0);
    }
    
    var j;
    var consec = arr;
    arr = [];
    while (consec != arr) {
        arr = consec;
        consec = [];
        for (var i = 0; i < arr.length; i++) {
            if (isPrime(arr[i]) === isPrime(arr[i + 1]) &&
                i + 1 < arr.length) {
                j = i;
                while (isPrime(arr[i]) === isPrime(arr[i + 1]) &&
                    i + 1 <= arr.length) {
                    i++;
                }
                consec.push(sum(arr.slice(j, i + 1)));
            } else {
                consec.push(arr[i]);
            }
        }
        if (consec.length == arr.length) break;
    } 
    return consec;
}
