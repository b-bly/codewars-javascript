//https://www.codewars.com/kata/58d06bfbc43d20767e000074/solutions/javascript

function damagedOrSunk (board, attacks) {  
    function getBoat(xi, yi, sqr) {
        var xIncr = 0, yIncr = 0, x = xi, y = yi,
        xLen = board[0].length,
        yLen = board.length;
        var boatNum = [];
        if (sqr === board[yi][xi + 1]) { xIncr = 1; }
        else if (sqr === board[yi + 1][xi]) { 
            yIncr = 1; 
        }
        else if (sqr === board[yi + 1][xi + 1]) { 
            xIncr = 1;
            yIncr = 1;
        } else { return [[xi, yi]]; }
        while (x < xLen && y < yLen) {
            if (board[y][x] !== sqr) break;
            boatNum.push([x, y]);
            x += xIncr;
            y += yIncr;
            
        }
        return boatNum;
    }
    
    attacks = attacks.map(function(coord) {
        return [coord[0] - 1, board.length - coord[1]];
    });
    var boatCoorBefore = {}; // num: [coord]
    var boatLengthsAfter = {}; // boat num : length after hits
    var boatNumArr = []; // num of each boat
    var result = {"sunk": 0, "damaged": 0, "notTouched":0, "points": 0};
    var count = 0;
    //fill boatCoorBefore with boat coordinates
    board.forEach(function(xArr, yi, brd) {
        xArr.forEach(function(sqr, xi, xArr) {
            if (sqr !== 0 && boatNumArr.indexOf(sqr) === -1) {
                boatCoorBefore[sqr] = getBoat(xi, yi, sqr);
                boatNumArr.push(sqr);
            }
        });
    });
    //change hits to 0;
    attacks.forEach(function(coord) {
        var y = coord[1];
        var x = coord[0];
        board[y][x] = 0;
    });
    //add up remaining boat pieces to get each boat's length and store in
    //boatLengthAfter
    boatNumArr.forEach(function(num) {
        count = 0;
        boatCoorBefore[num].forEach(function(coor) {
            if (board[coor[1]][coor[0]] === num) {
                count += 1;
            }
            boatLengthsAfter[num] = count;
        });
    });
    //add up stats in result {}
    var boatLenBefore, boatLenAfter;
    boatNumArr.forEach(function(num) {
        boatLenBefore = boatCoorBefore[num].length;
        boatLenAfter = boatLengthsAfter[num];
        if (boatLenBefore === boatLenAfter) {
            result.notTouched += 1;
        }
        else if (boatLenAfter === 0) {
            result.sunk += 1;
        }
        else {
            result.damaged += 1;
        }
    });
    result.points = result.sunk + result.damaged * 0.5 - result.notTouched;
    return result;
}
