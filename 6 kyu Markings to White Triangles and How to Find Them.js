/*
https://www.codewars.com/kata/592dcbfedc403be22f00018f/solutions/javascript
*/

function howToFindThem (rightTriangle) {
    var sides = Object.keys(rightTriangle).sort();
    var r, a, b, c;
    if (sides[0] == 'a' && sides[1] == 'b') {
        r = Math.sqrt(Math.pow(rightTriangle.a,2) + Math.pow(rightTriangle.b,2));
        if (r % 1 !== 0) r = (Math.round((r * 10000)/10)/1000).toFixed(3);
        rightTriangle.c = parseFloat(r, 10);
    } else if (sides[0] == 'a' && sides[1] == 'c') {
        c = rightTriangle.c;
        a = rightTriangle.a;
        r = Math.sqrt(c*c - a*a);
        if (r % 1 !== 0) r = (Math.round((r * 10000)/10)/1000).toFixed(3);
        rightTriangle.b = parseFloat(r, 10);
    } else {
        b = rightTriangle.b;
        c = rightTriangle.c;
        r = Math.sqrt(c*c - b*b);
        if (r % 1 !== 0) r = (Math.round((r * 10000)/10)/1000).toFixed(3);
        rightTriangle.a = parseFloat(r, 10);
    }
    var sortTri = {};
    sortTri.a = rightTriangle.a;
    sortTri.b = rightTriangle.b;
    sortTri.c = rightTriangle.c;
return sortTri;
}
