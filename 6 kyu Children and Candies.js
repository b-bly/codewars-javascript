/*
Description:

In kindergarten, the teacher gave the children some candies. The number of candies each child gets is not always the same. Here is an array candies(all elements are positive integer). It's the number of candy for each child:

 candies = [10,2,8,22,16,4,10,6,14,20]
The teacher asked the children to form a circle and play a game: Each child gives half of his candies to the child on his right(at the same time). If the number of children's candy is an odd number, the teacher will give him an extra candy, so that he can evenly distribute his candy.

Repeat such distribute process, until all the children's candies are equal in number.

You should return two numbers: 1.How many times of distribution; 2. After the game, the number of each child's candy. Returns the result using an array that contains two elements.

Some examples:

      candies = [ 1,2,3,4,5 ]
Distribution 1: [ 4,2,3,4,5 ]
Distribution 2: [ 5,3,3,4,5 ]
Distribution 3: [ 6,5,4,4,5 ]
Distribution 4: [ 6,6,5,4,5 ]
Distribution 5: [ 6,6,6,5,5 ]
Distribution 6: [ 6,6,6,6,6 ]
So, we need return: [6,6]

distributionOfCandy([1,2,3,4,5]) === [6,6]

       candies = [ 10,  2,  8, 22, 16,  4, 10,  6, 14, 20 ]
distribution  1: [ 15,  6,  5, 15, 19, 10,  7,  8, 10, 17 ]
distribution  2: [ 17, 11,  6, 11, 18, 15,  9,  8,  9, 14 ]
distribution  3: [ 16, 15,  9,  9, 15, 17, 13,  9,  9, 12 ]
distribution  4: [ 14, 16, 13, 10, 13, 17, 16, 12, 10, 11 ]
distribution  5: [ 13, 15, 15, 12, 12, 16, 17, 14, 11, 11 ]
distribution  6: [ 13, 15, 16, 14, 12, 14, 17, 16, 13, 12 ]
distribution  7: [ 13, 15, 16, 15, 13, 13, 16, 17, 15, 13 ]
distribution  8: [ 14, 15, 16, 16, 15, 14, 15, 17, 17, 15 ]
distribution  9: [ 15, 15, 16, 16, 16, 15, 15, 17, 18, 17 ]
distribution 10: [ 17, 16, 16, 16, 16, 16, 16, 17, 18, 18 ]
distribution 11: [ 18, 17, 16, 16, 16, 16, 16, 17, 18, 18 ]
distribution 12: [ 18, 18, 17, 16, 16, 16, 16, 17, 18, 18 ]
distribution 13: [ 18, 18, 18, 17, 16, 16, 16, 17, 18, 18 ]
distribution 14: [ 18, 18, 18, 18, 17, 16, 16, 17, 18, 18 ]
distribution 15: [ 18, 18, 18, 18, 18, 17, 16, 17, 18, 18 ]
distribution 16: [ 18, 18, 18, 18, 18, 18, 17, 17, 18, 18 ]
distribution 17: [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]
So, we need return: [17,18]

distributionOfCandy([10,2,8,22,16,4,10,6,14,20]) === [17,18]
*/



function distributionOfCandy(candies){
    var allValuesDiff = function(arr) {
        var len = arr.length;
        for(var i = 1; i < len; i++) {
            if(arr[i] !== arr[0]) return true;
        }
        return false;
    };
    function distribute(val, i, arr) {
        if (i === 0) { i = arr.length;}
        if (arr[i - 1] % 2 === 1) {
            arr[i - 1] += 1;
        }
        return arr[i - 1] / 2 + Math.ceil(val/2);
    }   
    var counter = 0;
    var valuesDiff = true;
    
    while (valuesDiff) {
        candies = candies.map(distribute);
        valuesDiff = allValuesDiff(candies);
        counter += 1;
    }
    return [counter, candies[0]];
}
