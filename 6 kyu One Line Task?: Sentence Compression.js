/*

Task

You are given a sentence which consists of alphanumeric characters with upper and lower cases, and some whitespaces and punctuations.

Please remove the whitespaces, punctuations and digits to improve the readability of the sentence.

Punctuations are ,, ., ?, !, -, :, ;, ~, ", ' and /.

Code Limit

Less than 47 characters.

Example

For s = 'Hello World!', the output should be 'HelloWorld'.

Remove whitespace and ! from the sentence, we get 'HelloWorld'.

For s = 'This is madness. Madness? This, is, SPARTA!', the output should be 'ThisismadnessMadnessThisisSPARTA'.

All the punctuations (,, ., ?, !) are removed.

For s = 'I\'m supposed to be playing CodeWars but this one player keeps kicking my ass. Is it myjinxin2015?! Yeah, myjinxin2015. Who is my jinxin 2015?', the output should be 'ImsupposedtobeplayingCodeWarsbutthisoneplayerkeepskickingmyassIsitmyjinxinYeahmyjinxinWhoismyjinxin'.

Digits are also removed.
*/

sentenceCompression=s=>s.replace(/\W|\d/g,'');
