/*
Note:Returning the pattern is not the same as Printing the pattern.
####Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
###Pattern:

1
22
333
....
.....
nnnnnn
###Examples:

pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
* Hint: Use \n in string to jump to next line
*/

function pattern(n) {
    var output = [];
    for (var i = 1; i <= n; i++) {
        var num = i.toString();
        output.push(num.repeat(i) + '\n');
    }
    if (output == '') {
      return '';
    }
    output[output.length - 1] = output[output.length - 1].slice(0, output[output.length -1].length - 1); 
    return output.join('');
}
