// https://www.codewars.com/kata/horse-racing-tian-ji-sai-ma/train/javascript

function horseRacing(noble, tianji) {
    noble.sort((a, b) => a - b);
    tianji.sort((a, b) => a - b);
    var counter = 0;
    var impossible = tianji.filter(function (el) {
            return el > noble[0];
        });
    if (impossible.length === 0) return 0;
    while (tianji.length != 0 && noble.length != 0) {
        tianji = tianji.filter(function (el) {
            return el > noble[0];
        });
        if (tianji.length > 0) counter++;
        noble.shift();
        tianji.shift();
        
    }
    return counter;
}
