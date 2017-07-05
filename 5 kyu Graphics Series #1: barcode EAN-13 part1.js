// https://www.codewars.com/kata/graphics-series-number-1-barcode-ean-13-part1/train/javascript

function readBarcode(first,barcode){
  var group=["LLLLLL","LLGLGG","LLGGLG",
  "LLGGGL","LGLLGG","LGGLLG",
  "LGGGLL","LGLGLG","LGLGGL",
  "LGGLGL"];
  var lcode=["0001101","0011001","0010011",
  "0111101","0100011","0110001",
  "0101111","0111011","0110111",
  "0001011"];

  var  gcode=["0100111","0110011","0011011",
  "0100001","0011101","0111001",
  "0000101","0010001","0001001",
  "0010111"];

  var rcode=["1110010","1100110","1101100",
  "1000010","1011100","1001110",
  "1010000","1000100","1001000",
  "1110100"];

  var result = first + '';
  function decode(code, n) {
    for (var j = 0; j <= 9; j++) {
      if (code[j] === barcode.slice(n, n + 7)) {
        result += j;
      }
    }
  }

    for (var i = 3; i <= 44; i+= 7) {
      if (group[first][(i - 3) / 7] === 'L') {
        decode(lcode, i);
      } else {
        decode(gcode, i);
      }
    }
    for (var j = 50; j <= 91; j+= 7) {
      decode(rcode, j);
    }
  return result;
}

