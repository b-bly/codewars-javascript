/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

//New idea.  The first part of the code is good--look for the lowest decimal place where
// i > i-1
//Then, look through n.slice(i-1) for the digit that is the next largest from i-1.  Swap these.
// (currently, the code looks for the max value, which is wrong).
//then sort n.slice(i)
//then add n.slice(0,i) + n.slice(i);
//That should do it

function nextBigger(n){
    n = n.toString(10).split("").map(function(t) {
        return parseInt(t);
    });
    
    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }
 // i-1 is the decimal place of n being checked
    for (i = n.length - 1; i > 0; i--) {
        var selection = n.slice(i);
        var maxIndex = indexOfMax(selection);
        maxIndex += i;

        if (n[maxIndex] > n[i-1]) {
            var temp = n[i-1];
            n[i-1] = n[maxIndex];
            n[maxIndex] = temp;
            var current;
            var previous = parseInt(n.join(''));
            var difference;
            
            while (difference != 0) {
            previous = current
                for (i = n.length - 1; i > maxIndex; i--) {
                    if (n[i] < n[i - 1]) {
                        temp = n[i-1];
                        n[i-1] = n[i];
                        n[i] = temp;
                    }
                }
                current = parseInt(n.join(''));
                difference = previous - current;
            }
            return parseInt(n.join(''));
        }
    }  
    return -1;
}

  
console.log(nextBigger(34321));
//[5,4,5].slice(2);
