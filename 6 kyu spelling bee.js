// https://www.codewars.com/kata/57d6b40fbfcdc5e9280002ee/solutions/javascript

function howManyBees(hive) {
  console.log(hive);
  if (hive === null || hive.length == 0) {return 0;}
  var count = 0, lenX = hive[0].length, lenY = hive.length;
  hive.forEach(function(row, y) {
    row.forEach(function(el, x) {
      if (x <= lenX - 3) {
          if ((el + row[x + 1] + row[x + 2]) === 'bee') count += 1;
          if ((el + row[x + 1] + row[x + 2]) === 'eeb') count += 1;
        }
      if (y <= lenY - 3) {
        if ((el + hive[y + 1][x] + hive[y + 2][x]) == 'bee') count +=1;
        if ((el + hive[y + 1][x] + hive[y + 2][x]) == 'eeb') count +=1;
      }
    });
  });
  return count;
}
