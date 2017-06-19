//https://www.codewars.com/kata/piano-kata-part-1/train/javascript


function blackOrWhiteKey(keyPressCount) {
    
    var keyColor = ['white', 'black', 'white', 'white',
        'black', 'white', 'black', 'white', 'white', 'black', 'white',
        'black'];
    return keyColor[(keyPressCount - 1) % 88 % 12];
}
