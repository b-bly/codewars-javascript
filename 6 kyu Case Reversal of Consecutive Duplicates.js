/*
The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

Examples:

reverseCase("puzzles")    Expected Result: "puZZles"
reverseCase("massive")    Expected Result: "maSSive"
reverseCase("LITTLE")     Expected Result: "LIttLE"
reverseCase("shhh")       Expected Result: "sHHH"
Arguments passed will include only alphabetical letters A–Z or a–z.
*/

function reverseCase(string) {
  return string.replace(/([a-zA-Z])\1+/g, function(match, p1, offset, string) {
    if (match.toUpperCase() === match) {
      return match.toLowerCase();
    } else {
      return match.toUpperCase();
    }
  });
 
}
