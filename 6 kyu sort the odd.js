/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(arr) {
    var odds = [];
    var oddsIndecies = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            odds.push(arr[i]);
            oddsIndecies.push(i);
        }
    }
    odds.sort((a,b) => a - b);
    odds.forEach(function(val, i) {
        arr[oddsIndecies[i]] = val;
    });
    return arr;
}
