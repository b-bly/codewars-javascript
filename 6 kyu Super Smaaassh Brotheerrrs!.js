/*
https://www.codewars.com/kata/super-smaaassh-brotheerrrs/train/javascript
*/

function scoreHandler() {
  var events = [], scores, playersArr;
    this.endRound = function() {
    function punch(punchingPlayer, punchedPlayer, i) {
      for (i; i < events.length; i++) {
        if (events[i][1] === punchedPlayer) {break;}
        if (events[i][0] === punchedPlayer) {
           if (events[i][1] === 'lands' ||
                events[i][1] === 'spawns') {;
             break;
           } else if (events[i][1] === 'dies') {
             scores[punchedPlayer] -= 1;
             scores[punchingPlayer] += 1;
             events[i] = [];
             break;
          }
        }
      }
    }
      function suicide() {
        events.forEach(function(el) {
          if (el[1] === 'dies') {
            scores[el[0]] -= 1;
          }
        });
      }
      events.forEach(function(el, i) {
        if (playersArr.findIndex((x) => x === el[1]) >= 0) {
          punch(el[0], el[1], i + 1);
        }
      });
    suicide();
    return scores;
    }
    
	this.startRound = function(players) {
    scores = {};
    playersArr = players;
    players.forEach(function(el) {
      scores[el] = 0;
    });  
	}
  
	this.handleEvent = function(event) {
    events.push(event);
  }
}
