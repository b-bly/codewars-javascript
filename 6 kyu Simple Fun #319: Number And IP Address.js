/*
Task

An IP address contains four numbers(0-255) and separated by dots. It can be converted to a number by this way:

Example IP address: 10.0.3.193

Convert each number to a 8-bit binary string
(may needs to pad leading zeros to the left side)
10  -->  00001010
0   -->  00000000
3   -->  00000011
193 -->  11000001

Combine these four strings:
00001010 00000000 00000011 11000001

And then convert them to a decimal number:
167773121
Given a string s represents a number or an IP address. Your task is to convert it to another representation(number to IP address or IP address to number).

You can assume that all inputs are valid.

Input/Output

[input] string s

A number or IP address in string format.

[output] a string

A converted number or IP address in string format.

Example

For s = "10.0.3.193", the output should be "167773121".

For s = "167969729", the output should be "10.3.3.193".
*/

function numberAndIPaddress(s){  
    var newAddress = '';
    var pad;
    var bi;
        //https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    
    if (s.search(/\./g) !== -1){
    s.split('.').forEach(function(val, i, arr) {
        pad = "00000000";
        bi = dec2bin(val);
        newAddress += (pad + bi).slice(-pad.length);
        console.log(val);
    });
        
    //https://stackoverflow.com/questions/10258828/how-to-convert-binary-string-to-decimal
    return parseInt(newAddress, 2).toString(10);
    
    } else {
        var index;
        var pad = "00000000";
        bi = dec2bin(s);
        bi = (pad + bi).slice(-32);
        bi = bi.match(/.{1,8}/g);
        
        for (var i = 0; i < bi.length; i++){
            bi[i] = parseInt(bi[i], 2).toString(10);
        }
    return bi.join('.');
    }
}
