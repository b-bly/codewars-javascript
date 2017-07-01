
//https://www.codewars.com/kata/battleship-field-validator/train/javascript
function validateBattlefield(field) {
    var lengths = {}, xOff, yOff, len, start, counter = 0, xs, ys;
        function checkIfNewShip(x, y) {
            if (x > 0 &&
                field[y][x - 1] === 1) {
                  return false;
                }
            if (y > 0 &&
                field[y - 1][x] === 1) {
                  return false;
            }
            return true;
        }

        function checkDiagonals(x, y) {
            if (x === 0 && y < field.length - 1) {
              if (field[y + 1][x + 1] === 1) {
                return false;
              }
            }
            if (x === field[0].length - 1 && y < field.length - 1) {
              if (field[y + 1][x - 1] === 1) {
                return false;
              }
            }
            if (x > 0 && x < field[0].length - 1 && y < field.length - 1) {
              if (field[y + 1][x + 1] === 1 ||
                  field[y + 1][x - 1] === 1) {
                return false;
                 }
            }
            return true;
        }

  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
        xs = x;
        ys = y;
        if (field[y][x] === 1) {
            if (checkIfNewShip(x, y) === true) {
                if (field[y][x + 1] === 1) {
                    xOff = 1;
                    yOff = 0;
                    start = x;
                  }
                  else if (field[y + 1][x] === 1) {
                    xOff = 0;
                    yOff = 1;
                    start = y;
                  } else {
                      start = x;
                  }
                  for (start; start < field.length; start++) {
                        if (field[y][x] === 0) {
                            break;
                        }
                        if (checkDiagonals(x, y) === false) {
                            return false;
                        }
                        counter ++;
                        x += xOff;
                        y += yOff;
                 }
                if (counter !== 0) lengths[counter] = (lengths[counter] || 0) + 1;
                //if (counter === 1) console.log("x = " + x + ", y = " + y);
                counter = 0;
                y = ys;
                x = xs;
        }
      }
    }
  }
  if (lengths['4'] === 1 &&
      lengths['3'] === 2 &&
      lengths['2'] === 3 &&
      lengths['1'] === 4 &&
      Object.keys(lengths).length === 4) {
        return true;
  } else {
    return false;
  }
}

var field =     [ [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
  [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
  [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0 ],
  [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];

console.log(validateBattlefield(field));
