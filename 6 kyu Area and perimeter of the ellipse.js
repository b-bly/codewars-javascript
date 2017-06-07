/*
Calculate area and perimeter of the elipse.

You got dimensions of two axis "a" and "b" in centimeters.

the approximate perimeter: π * (3/2(a+b) - sqrt(ab))

Example:

Input: elipse(5,2)

Output: Area: 31.4, perimeter: 23.1
*/

function elipse(a,b){
    var area = (Math.PI * a * b).toFixed(1);
    var perim = (Math.PI * (3/2*(a+b) - Math.sqrt(a*b))).toFixed(1);
    
    return "Area: " + area + ", perimeter: " + perim;
}
