/*
https://www.codewars.com/kata/the-hunger-games-foxes-and-chickens/train/javascript
*/


 var hungryFoxes = function(farm) {

    var check = /(^[CF\.]*F+[CF\.]*\[)|(\][CF\.]*F+[CF\.]*\[)|(\][CF\.]*F+[CF\.]*$)/g;
    var re = /^[CF\.]*\[|\][CF\.]*\[|\][CF\.]*$/g;        
    var reCage = /\[[CF\.]*F+[CF\.]*\]/g;
    var replacer = function(match) {
        return match.replace(/C/g, '.');
    };
    if (!(/[\[\]]/g.test(farm))) {
      return farm.replace(/.*F+.*/g, replacer);
    }
    if (check.test(farm)) {
    farm = farm.replace(re, replacer);
    }
    return farm.replace(reCage, replacer);
 };


