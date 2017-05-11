/*
https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript

Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones: 'Lorem---ipsum---dolor--sit--amet' (3, 3, 2, 2 spaces).
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').
Example with width=30:

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)
*/
  // str.split();
  // loop and add length of each word plus a space  = sentenceLength
  // (add i bc it starts at 0) until 
  // >= len
  // add each word to newArr
  // if === len (account for extra space at end), join words in that array,
  //if > len, join one word less (store previous sentenceLength calc) 
  //(don't add that word to newArr)
    // i will be the number of words at this point.
    //Will it be easier to add spaces to words in an array
    // or to a string after they're joined?
    // spaces per word = (len - sentenceLength)/num of words
    //Math.floor(spacesPerWord) add this many spaces per word
    //Add one extra space after each word this many times:
        // (sentenceLength - len) % num of words
    // add \n, append to growing string.
    //else (this is the last line) newArr.join(' '); add to string
var justify = function(str, len) {
var arr = str.split(' ');
var line = [];
var sentenceLength = 0;
var counter = 0;
var result = '';
var i = 0;

while (i < arr.length) {
    line = [];
    counter = 0;
    sentenceLength = 0;
    
    while (sentenceLength < len) {
        line.push(arr[i]);
        sentenceLength += arr[i].length + 1;
        i++;
        if (i > arr.length - 1) {
            break;
        }
    }
    sentenceLength -= 1;
    
    if (sentenceLength === len) {
        line[line.length - 1] += '\n';
        line = line.join(' ');
        
    } else if (sentenceLength > len) {
        i -=1;  //so the last word gets added to the next line
        sentenceLength = sentenceLength - line[line.length - 1].length - 1;
        //console.log(sentenceLength);
        line.pop();
        line[line.length - 1] += '\n';
        var numWords = line.length - 1;
        var spacesPerWord = Math.floor((len - sentenceLength)/numWords) + 1;
        sentenceLength = line.join(' '.repeat(spacesPerWord)).length;
        var extraSpaces = (len - sentenceLength) % numWords;
        for (var j = 0; j < extraSpaces; j ++) {
            line[j] = line[j] + ' ';
        }
        line = line.join(' '.repeat(spacesPerWord));
    } else {
        //this is the last line
        line = line.join(' ');
    }
    console.log(line.length);
    result += line;
}
return result;
};

var str = 'Lorem  ipsum  dolor  sit amet, consectetur  adipiscing  elit. Vestibulum    sagittis   dolor mauris,  at  elementum  ligula tempor  eget.  In quis rhoncus';
console.log(justify(str, 30));
//console.log('tempor  eget.  In quis rhoncus'.length);

