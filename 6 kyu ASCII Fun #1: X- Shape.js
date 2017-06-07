/*
This will probably be a little serie :)

X- Shape

You will get an odd Integer n (>= 3) and your task is to draw a X. Each line is seperated with '\n'.

Use the following characters:

■ □

e.g.:


                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□              x(5)=>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■
*/

function x(n){
    var picture = [];
    var picString = '';
    
    for (var i = 0; i < n; i++) {
        picture.push('□'.repeat(n).split(''));
    }

    for (var y = 0; y < n; y++) {
        picture[y][y]= '■';
        picture[y][n - y-1]  = '■';
    }
    return picture.map(function(val, i, arr) {
        return val.join('');
    }).join('\n');
}
