/*
Task

You work for the Thumbtack company. Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack, a Pro specifies which categories of services they provide. To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.

Given a list of pros and their category preferences, return the list of Pros for each category.

Input/Output

[input] string array pros

A sorted non-empty array of unique strings consisting of English letters.

Here and below we assume that strings are sorted lexicographically.

1 ≤ pros.length ≤ 10,

3 ≤ pros[i].length ≤ 10.

[input] 2D string array preferences

Array of the same length as pros. For each valid i preferences[i] is a sorted array of unique elements, representing the categories the ith Pro provides services in.

1 ≤ preferences.length ≤ 10,

1 ≤ preferences[i].length ≤ 10,

3 ≤ preferences[i][j].length ≤ 25.

[output] 2D string array

Array of category descriptions sorted by category names. Each category should be listed in the following format: [[], [, ...]] where is a category name, and is a Pro that provides services in it.

Each category present in preferences should be returned (in the right order), and Pros in each subarray should be sorted.

Example

For pros = ["Jack", "Leon", "Maria"] and

preferences = [
["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]
]
the output should be

[
[["Computer lessons"], ["Leon", "Maria"]],
[["Computer repair"], ["Jack", "Leon"]],
[["Data recovery service"], ["Leon"]],
[["Handyman"], ["Jack"]],
[["House cleaning"], ["Jack", "Maria"]]
]
*/

function proCategorization(pros, preferences) {
  var output = [];
  var pref;
  var prefDict = {};
  
  for (var i in pros) {
      for (var j in preferences[i]) {
          pref = preferences[i][j];
          if (prefDict[pref]) {
            prefDict[pref].push(pros[i]);
          } else {
              prefDict[pref] = [pros[i]];
          }
      }
  }
  for (var prop in prefDict) {
      output.push([[prop], prefDict[prop]]);
  }
  output.sort(function(a, b){
    return a[0] < b[0] ? -1 : 1;
  });
  output.forEach(function(val){
    val[1].sort();
  });
  return output;
}
