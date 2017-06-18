/*
https://www.codewars.com/kata/57c2be599f48a8244000004f/solutions/javascript
*/

class RankCalculator {
  static GetRankings(pointsByClimber) {
    var pbcArr = Array.apply(null, Array(pointsByClimber.length)).map(function(el, i){
        var pointSum = pointsByClimber[i].points.sort((a,b)=>b-a).slice(0,6)
          .reduce((acc, el) => acc + el);
        return [pointsByClimber[i].name, pointSum];
        }).sort((a,b) => b[1] - a[1]);
        for (var i = 0; i < pointsByClimber.length; i++) {
          pointsByClimber[i].name = pbcArr[i][0];
          pointsByClimber[i].points = pbcArr[i][1];
        }
    return pointsByClimber;
  }
}
