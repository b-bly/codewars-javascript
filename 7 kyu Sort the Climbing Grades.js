//https://www.codewars.com/kata/sort-the-climbing-grades/train/javascript
function sortGrades(lst){

  function sorter(a, b) {
    if (b === 'VB') {
      return 1;
    }
    a = a.slice(1);
    b = b.slice(1);
    if (a === '0+') {
      return 0;
    }
    else {
      return a - b;
    }
  }
  return lst.sort().sort(sorter);
}
