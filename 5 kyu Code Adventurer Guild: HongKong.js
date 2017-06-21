//https://www.codewars.com/kata/5939f09c193f71b5fc0000fa/solutions/javascript


function talkingToTaskPublisher(){
  return 'Brendt';
}

function shapeU(s) {
    var l = s.length, side, bottom, spaces, adj, u = '';
    if (l % 2 === 0) {
        side = Math.floor((l) / 3);
        bottom = side + l % 3;
    } else {
        side = Math.floor((l) / 3);
        bottom = side + (l) % 3;
    }
    spaces = ' '.repeat(bottom - 2);
    for (var i = 0; i < side; i++) {
        u += s[i] + spaces + s[l - i - 1] + '\n';
    }
    for (i = 0; i < bottom; i++) {
        u+= s[i + side];
    }
    return u;
}

function findRepeatChar(s) {
    var result = s.match(/(.)\1+/g);
    return result === null ? '' : result.join('');
}

function connectString(s1, s2) {
    var len = Math.min(s1.length, s2.length);
    for (var i = len; i > 0; i--) {
        if (s1.slice(s1.length - i, s1.length) === s2.slice(0, i)) {
            return s1 + s2.slice(i, s2.length);
        }
    }
    return s1 + s2;
}

function playCards(friend, you) {
    var num, result = [];
    var youArr = you.toString(10).split(''); 
    for (var i = 0; i < you.length; i++) {
        num = youArr.filter(function(el, j) {
            return el > friend[i];
        });
        num = num.reduce(function(acc, n) {
            return Math.min(acc, n)
        }, num[0]);
        num = num.toString(10);
        result.push(num);
        var index = youArr.indexOf(num);
        youArr.splice(youArr.indexOf(num), 1);
    }
    return result.join('');
}

function countWords(s, e) {
    e += '\\b';
    var re = new RegExp(e, 'g');
    if (s.match(re) === null) return 0;
    return s.match(re).length
}

function combineString(s1, s2) {
    return s1.split('').map(function(el, i) {
        return el + s2[s2.length - i - 1];
    }).join('');
}
