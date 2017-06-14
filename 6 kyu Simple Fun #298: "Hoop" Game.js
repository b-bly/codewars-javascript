/*
Task

In a game we called that "hoop", n player numbered from 1 to n are playing. The first player says 1, the second player says 2 and so on. After everyone says a number, it's the first player's turn again.

There's an additional rule that make the game more interesting: if the current number the person should say is divisible by 3 or 7, the person should say 0 instead.

You're given the number of players n, and what was said in each turn. Your task is to find the players who made mistakes:

- the players should be returned in the order they made mistakes;
- if the player made several mistakes, all of them should be returned.
Input/Output

[input] integer n

The number of players.

1 ≤ n ≤ 20

[input] 2D integer array turns

Array of non-negative numbers, where the ith number is the number said in the ith turn.

1 ≤ turns.length ≤ 100.

[output] an integer array

Array of players who made mistakes in the order of turns the mistakes were made in.

Example

For n = 3 and turns = [1, 2, 3, 4, 4, 0, 0, 0],

the output should be [3, 2, 2].

During the first round, players 1 and 2 did everything right, but the player 3 forgot to say 0 (3 is divisible by 3, so 0 should be said instead).

During the second round, player 2 said 4 instead of 5, which was a mistake.

Finally, during the last round player 2 said 0 instead of 8, which was a mistake.

So the output should be [3(player3), 2(player2), 2(player2)].
*/
function hoopGame(n, turns) {
    var output = [];
  var correct = Array.apply(null, Array(turns.length)).map(function(_, i){
    i = i + 1;
    return !(i % 3) || !(i % 7) ? 0 : i;
  });
  turns.forEach(function(v, i, a) {
    if (v !== correct[i]) {
        output.push(i % n + 1);
    }
  });
  return output;
}
