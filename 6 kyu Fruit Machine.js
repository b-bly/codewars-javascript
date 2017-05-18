/*
Task

 	You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules

 	1. There are always exactly three reels
2. Each reel has 10 different items.
3. The three reel inputs may be different.
4. The spin array represents the index of where the reels finish.
5. The three spin inputs may be different
6. Three of the same is worth more than two of the same
7. Two of the same plus one "Wild" is double the score.
8. No matching items returns 0.
Scoring

Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2
 
Returns

 	Return an integer of the score.
Example

Initialise

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);
Scoring

Return

result == 50
Good luck and enjoy!
*/


unction fruit(reels, spins){
  // Code here
  if (reels[0][spins[0]] === reels[1][spins[1]] && reels[1][spins[1]] == reels[2][spins[2]]) {
      //3 of same
      return scoreRatio(reels[0][spins[0]]) * 10;
  }
  
  else if (reels[0][spins[0]] === reels[1][spins[1]] || reels[0][spins[0]] == reels[2][spins[2]]) {
      if (reels[0][spins[0]] !== 'Wild' && [reels[1][spins[1]], reels[2][spins[2]]].indexOf('Wild') >= 0) {
          //2 of same and wild
        return scoreRatio(reels[0][spins[0]]) * 2;
                  
      } else {
          //2 of same no extra wild
           return scoreRatio(reels[0][spins[0]]);
                  
      }
  }
  
    else if (reels[1][spins[1]] == reels[2][spins[2]]) {
      if (reels[1][spins[1]] !== 'Wild' && reels[0][spins[0]] === 'Wild') {
          //2 of same and wild
        return scoreRatio(reels[1][spins[1]]) * 2;
                  
      } else {
          //2 of same no extra wild
          return scoreRatio(reels[1][spins[1]]);
      }
      
    } else { return 0; }
    
    function scoreRatio(item) {
        switch (item) {
            case 'Wild':
                return 10;
            case 'Star':
                return 9;
            case 'Bell':
                return 8;
            case 'Shell':
                return 7;
            case 'Seven':
                return 6;
            case 'Cherry':
                return 5;
            case 'Bar':
                return 4;
            case 'King':
                return 3;
            case 'Queen':
                return 2;
            case 'Jack':
                return 1;
            default:
                return 0;
        }
    }
}
