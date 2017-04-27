function tickets(peopleInLine){
  // Add up num 25's and 50s in var
  // if 50, channge = one 25
  // if 100, change = one 50 and one 25 || three 25's;
  // check if we have change;
  // if not, return 'NO';
  // if yes, adjust cash variables;
  // return yes;
  
  var twenty_fives = 0;
  var fifties = 0;
  
  for (var i = 0; i < peopleInLine.length; i++) {
  
    // see if we have enough cash
    if (peopleInLine[i] == 50 && twenty_fives == 0 ||
      peopleInLine[i] == 100 && fifties == 0 && twenty_fives < 3 ||
      peopleInLine[i] == 50 && fifties == 1 && twenty_fives < 1) {
      return 'NO';
    }
    
    //adjust change
    if (peopleInLine[i] == 100) {
      if (fifties > 0) {
        fifties -= 1;
        twenty_fives -= 1;
      } else {
        twenty_fives -= 3;
      }
    } else if (peopleInLine[i] == 50) {
      fifties += 1;
      twenty_fives -= 1;
    } else {
      twenty_fives += 1;
    }
  }
  return 'YES';
}
