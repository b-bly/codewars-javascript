//https://www.codewars.com/kata/fibonacci-generator-function/train/javascript

function areContigElemenCloseEnough(arr, absError) {
    arr = arr.filter(function(num, i, a) {
      return (Math.abs(num - a[i + 1]) >= absError);
    });
    return arr.length === 0;
}

function simulCloseTo2(arr, absError){
    var count = 0, mu;
    function addDivMu(arr) {
        mu = arr.reduce(function(a, n) {
            return a + n;
        }, 0)/arr.length;
        arr = arr.map(function(el) {
            return (el + mu) / mu;
        });
        count++;
        if (!(areContigElemenCloseEnough(arr, absError))) addDivMu(arr);
      }
    addDivMu(arr);
    return count;
}
 
