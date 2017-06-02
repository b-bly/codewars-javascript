/*
If we have an integer of n digits, d1d2d3d4d5....dn, we define the following scores:

score_prod = 1d1 + 2d2 + 3d3 + 4d4 + 5d5 + .... + ndn

score_pow = 1d1 + 2d2 + 3d3 + 4d4 + 5d5 + .... + ndn

We want to find the integers that its score_pow multiplied by a certain integer k is divisible by the sum of the divisors of score_prod

In the sum of the divisors, 1 and the score_prod themselves are addens.

In this kata you have to create the function find_int(), that will receive three arguments:

The extreme values of a range (a, b), a as a start value and b as an upper limit, both included.
An integer k such that 1 <= k <= 100
The function will output a tuple with the amount of found integers and an array with the sorted integers that fulfill the above condition.

Let's see some cases:

test.describe("Basic Tests")
a = 100
b = 200
k = 1
find_int(a, b, k) == (7, [100, 110, 120, 135, 195, 197, 200])

a = 500
b = 700
k = 2
find_int(a, b, k) == (18, [500, 510, 531, 532, 535, 553, 570, 611, 612, 614, 617, 625, 627, 631, 634, 671, 695, 699])

a = 500
b = 700
k = 3
find_int(a, b, k) == (16, [501, 511, 532, 535, 553, 560, 571, 581, 613, 614, 617, 620, 625, 644, 645, 674])

a = 500
b = 700
k = 4
find_int(a, b, k) == (30, [500, 510, 531, 532, 534, 535, 553, 558, 570, 600, 611, 612, 614, 615, 617, 625, 627, 631, 634, 636, 637, 640, 671, 675, 679, 682, 692, 693, 695, 699])
For the tests always a < b.

Enjoy it!!
*/

function findInt(a, b, n) {
    function divisors(num) {
        if (num === 1) {return 1;}
        var half = Math.floor(num / 2),
            div = [1],
            i, j;
    
        num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
    
        for (i; i <= half; i += j) {
            num % i === 0 ? div.push(i) : false;
        }
    
        div.push(num);
        return div.reduce(function(acc, val){
            return acc + val;
        }, 0);
    }
    var scoreProd, scorePow, count, arr, divisorSum,
    list = [];
    
    for (var i = a; i <= b; i++) {
        arr = i.toString(10).split("").map(function(t){return parseInt(t)});
        scoreProd = arr.reduce(function(acc, val, i){
            return acc + ((i + 1) * val);
        }, 0);
        scorePow = arr.reduce(function(acc, val, i) {
            return acc + Math.pow(i+1, val);
        }, 0);
        
        divisorSum = divisors(scoreProd);
        if (!Boolean((scorePow * n) % divisorSum))  {
            list.push(i);
        }
    }
    return [list.length, list];
}
