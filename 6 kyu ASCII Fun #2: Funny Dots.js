/*
This is now a little serie :)

Funny Dots

You will get two Integer n (width) and m (height) and your task is to draw following pattern. Each line is seperated with '\n'.

Both integers are equal or greater than 1. No need to check for invalid parameters.

e.g.:


                                          +---+---+---+
            +---+                         | o | o | o |
dot(1,1) => | o |          dot(3,2) =>    +---+---+---+            
            +---+                         | o | o | o |
                                          +---+---+---+

*/

function dot(n,m){
    var dots = '';
  for (var i = 1; i <= m; i++) {
      dots += '+' + '---+'.repeat(n) + '\n';
      dots += '|' + ' o |'.repeat(n) + '\n';
  }
  dots += '+' + '---+'.repeat(n);
  return dots;
}
