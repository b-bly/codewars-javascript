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
function nextBigger(n){
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
    function indexOfNextBiggerDigit(arr) {
        var nextBigger = arr[0];
        var index = 0;

        for (var i = 1; i < arr.length; i++) {
            if (digitChecked < arr[i] && arr[i] < nextBigger) {
                index = i;
                nextBigger = arr[i];
            }
        }
        return index;
    }
    
    n = n.toString(10).split("").map(function(t) {
        return parseInt(t);
    });
    
 // i-1 is the decimal place of n being checked
    for (i = n.length - 1; i > 0; i--) {
        var selection = n.slice(i);
        var maxIndex = indexOfMax(selection);
        maxIndex += i;
        var digitChecked = n[i-1];
    
        if (n[maxIndex] > digitChecked) {
            var nextBiggerIndex = indexOfNextBiggerDigit(selection) + i;
            console.log(i);
            var temp = digitChecked;
            n[i-1] = n[nextBiggerIndex];
            n[nextBiggerIndex] = temp;
            
            n = parseInt((n.slice(0,i).concat(n.slice(i).sort())).join(''));
            return n;
        }
        
    }  
    return -1;
}


  
console.log(nextBigger(34321));
//[5,4,5].slice(2);
