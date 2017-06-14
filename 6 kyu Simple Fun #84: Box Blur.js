/*
Task

Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be [[1]].

In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.

Input/Output

[input] 2D integer array image

An image is stored as a rectangular matrix of non-negative integers.

Constraints:

3 ≤ image.length ≤ 15,

3 ≤ image[0].length ≤ 15,

0 ≤ image[i][j] ≤ 255.
[output] 2D integer array

A blurred image.
*/
function boxBlur(image) {
    var output = Array.apply(null, Array(image.length - 2)).map(function(){ 
        var ar = Array.apply(null, Array(image[0].length - 2)).map(function(){
            return 0});
        return ar});
    var avg;
    var sum = 0;
    for (var y = 0; y < image.length - 2; y++) {
        for (var x = 0; x < image[0].length - 2; x++) {
            sum = 0;
            sum += image[y].slice(x, x + 3).reduce((a,v)=>a+v);
            sum += image[y+1].slice(x, x + 3).reduce((a,v)=>a+v);
            sum += image[y+2].slice(x, x + 3).reduce((a,v)=>a+v);
            avg = Math.floor(sum / 9);
            output[y][x] = avg;
        }
    }
  return output;
}
