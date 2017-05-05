/*
Instructions

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/


function encrypt(text, n) { 
  var encrypted = text;
  var previousEncrypt = text;
  var j = 0;
  while (j < n) {
  j++;
  encrypted = '';
    for (var i = 1; i < text.length; i = i + 2) {
      encrypted += previousEncrypt[i];
    }
    for (i = 0; i < text.length; i = i + 2) {
      encrypted += previousEncrypt[i];
    }
    previousEncrypt = encrypted;
  }
  return encrypted;
}

function decrypt(encryptedText, n) {
  var arr = encryptedText.split('');
  var previousArr = encryptedText.split('');
  var j = 0;
  var evenIndex = Math.floor(encryptedText.length/2);
  var oddIndex = Math.ceil(encryptedText.length/2);
  
  while (j < n) {
    for (var i = 1; i < evenIndex; i++) {
      arr[i*2-1] = encryptedText[i];
    }
    for (i = 0; i < oddIndex; i++) {
      arr[i*2] = encryptedText[i + evenIndex];
    }
    previousArr = arr;
  }
  return arr.join('');
}
