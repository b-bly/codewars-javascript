//https://www.codewars.com/kata/t-dot-t-t-dot-10-the-largest-square/train/javascript

function max(wall){
    var checkLength, xLen = wall[0].length, yLen = wall.length, 
    check, side, k = 0, longest = 1;
    
    function checkSqr(k, y, x) {
        for (var yi = y; yi <= k + y; yi++) {
            for (var xi = x; xi <= k + x; xi++) {
                if (wall[yi][xi] === 'X') return false;
            }
        }
        return true;
    }
    
    wall.forEach(function(row, y, wallArr) {
        row.forEach(function(el, x) {
            checkLen = Math.min((yLen - y), (xLen - x));
            k = 0;
            while(k < checkLen) {
                if(checkSqr(k, y, x) === false) break;
                k++;
            }
            if (k > longest) longest = k;
        });
    });
    return longest * longest;
}
