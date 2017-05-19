



function Game(board){
  // Code here
  this.board = board;
}

Game.prototype.play = function(){
  var leaps = 0;
  
  board.forEach(function(x, i, xArr) {     
    x.forEach(function(y, j, yArr) {
        if (y == 1) {           
            if ((i - 1 < 0 || xArr[i - 1][j] === 0) &&
                (j - 1 < 0 || yArr[j -1 ] === 0)) {
                leaps += 1;
            }
        }
    });
  });
  return leaps;
}

board = [[1,0,1,0,1],
         [1,0,1,0,1],
         [1,1,1,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]];
game = new Game(board);
game.play();
