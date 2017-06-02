/*
Introduction

Mr. Safety is a lower of numeric locks and Nokia 3310. He locked almost everything in his house. He is so smart and he doesn't need to know the combination of numbers. He has an algorithm to generate new passcodes on his Nokia. 
postimage

Task

Can you crack his numeric locks? Mr. Safety's treasures wait for you. Write an algorithm to open his numeric locks. Can you do it without his Nokia 3310?

Input

The str input string consists of lowercase and uperrcase characters. It's a name of object that you want to unlock.

Output

Return a string consists of only digits.
Example

unlock("Nokia");  // => 66542
unlock("Valut");  // => 82588
unlokc("toilet"); // => 864538
*/

function unlock(str) {
    var password = '';
    
    for (var i = 0; i < str.length; i++) {
        lett = str[i].toLowerCase();
        password += code(lett);  
        console.log(password);
    }
    function code(letter) {
        switch (letter) {
            case 'a':
            case 'b':
            case 'c':
                return "2";
            case 'd':
            case 'e':
            case 'f':
                return "3";
            case 'g':
            case 'h':
            case 'i':
                return "4";
            case 'j':
            case 'k':
            case 'l':
                return "5";
            case 'm':
            case 'n':
            case 'o':
                return "6";
            case 'p':
            case 'q':
            case 'r':
            case 's':
                return "7";
            case 't':
            case 'u':
            case 'v':
                return "8";
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                return "9";
            default:
                break;
        }
    }
   return password;
}
