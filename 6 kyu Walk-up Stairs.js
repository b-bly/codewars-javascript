/*
Raj was to move up through a pattern of stairs of a given number (n). Help him to get to the top using the function stairs.

##Keep in mind :

If n<1 then return ' ' .
There are a lot of spaces before the stair starts except for pattern(1)
##Examples : pattern(1)

      1 1
pattern(6)

                      1 1
                  1 2 2 1  
              1 2 3 3 2 1
          1 2 3 4 4 3 2 1
      1 2 3 4 5 5 4 3 2 1
  1 2 3 4 5 6 6 5 4 3 2 1
pattern(12)

                                              1 1
                                          1 2 2 1
                                      1 2 3 3 2 1
                                  1 2 3 4 4 3 2 1
                              1 2 3 4 5 5 4 3 2 1
                          1 2 3 4 5 6 6 5 4 3 2 1
                      1 2 3 4 5 6 7 7 6 5 4 3 2 1
                  1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
              1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
          1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1
      1 2 3 4 5 6 7 8 9 0 1 1 0 9 8 7 6 5 4 3 2 1
  1 2 3 4 5 6 7 8 9 0 1 2 2 1 0 9 8 7 6 5 4 3 2 1

*/

function stairs(n)
{   var moving = [];
    for (var j = n; j > 0; j--) {
        moving[j-1] = '    '.repeat(n - j);
        for (var i = 1; i <= j; i++) {
            moving[j-1] += (i % 10).toString(10) + ' ';
        }
        for (var k = j; k > 0; k--) {
            moving[j-1] += (k % 10).toString(10);
            if (k !== 1) {moving[j-1] += ' ';}
        }
    }
    return moving.join('\n');
}
