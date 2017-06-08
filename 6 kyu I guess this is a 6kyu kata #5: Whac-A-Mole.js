/*
Description

Let's play the game "Whac-A-Mole". Give you an 2D array:

[
[1,1,2,2],
[3,3,4,4],
[4,8,8,8]
]
The meaning of numbers in the array is that the mole will disappear after n seconds(0 means no mole). You are holding a big hammer and every second can hit two moles. Please calculate the maximum number of moles you can hit.

In accordance with the above example:

[
[1,1,2,2],
[3,3,4,4],
[4,8,8,8]
]

After 1 second(hit 2, total=2)
[
[x,x,1,1],
[2,2,3,3],
[3,7,7,7]
]

After 2 seconds(hit 2, total=4)
[
[x,x,x,x],
[1,1,2,2],
[2,6,6,6]
]

After 3 seconds(hit 2, total=6)
[
[x,x,x,x],
[x,x,1,1],
[1,5,5,5]
]

After 4 seconds(hit 2, total=8)
[
[x,x,x,x],
[x,x,x,x],
[0,4,4,4]
]

After 5 seconds(hit 2, total=10)
[
[x,x,x,x],
[x,x,x,x],
[0,x,x,3]
]

After 6 seconds(hit 1, total=11)
[
[x,x,x,x],
[x,x,x,x],
[0,x,x,x]
]

We hit a total of 11 moles.
Another example:

[
[6,4,1,1],
[4,4,4,4],
[1,2,3,3]
]

After 1 second(hit 2, total=2)
[
[5,3,x,x],
[3,3,3,3],
[0,1,2,2]
]

After 2 second(hit 2, total=4)
[
[4,2,x,x],
[2,2,2,2],
[0,x,x,1]
]

After 3 second(hit 2, total=6)
[
[3,x,x,x],
[1,1,1,1],
[0,x,x,x]
]

After 4 second(hit 2, total=8)
[
[2,x,x,x],
[x,x,0,0],
[0,x,x,x]
]


After 5 second(hit 1, total=9)
[
[x,x,x,x],
[x,x,0,0],
[0,x,x,x]
]

We hit a total of 9 moles.
OK, that's all. I guess this is a 6kyu kata. If you agree, please rank it as 6kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

Task

Complete function whacAMole that accepts a argument arr, return the maximum number of moles you can hit.
*/


function whacAMole(arr){
    var whacks = 0;
     arr = arr.join(',').split(',').sort(function(a, b){
         return a-b;
         });
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) { 
            arr.shift();
        }
    }
    for (var j = 0; j < arr.length; j++) {
      while (arr[j] <= 0) {
        j += 1;
        if (j > arr.length - 1) {return whacks;}
      }
        if (arr[j] > 0) {whacks += 1;}
        if (!(whacks % 2)) {
          for (i = 0; i < arr.length; i++) {
            arr[i] -= 1;
          }
        }
    }
    return whacks;
}

