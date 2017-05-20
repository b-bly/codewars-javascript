/*
Your friend won't stop texting his girlfriend. It's all he does. All day. Seriously. The texts are so mushy too! The whole situation just makes you feel ill. Being the wonderful friend that you are, you hatch an evil plot. While he's sleeping, you take his phone and change the autocorrect options so that every time he types "you" or "u" it gets changed to "your sister."

Write a function called autocorrect that takes a string and replaces all instances of "you" or "u" (not case sensitive) with "your sister" (always lower case).

Return the resulting string.

Here's the slightly tricky part: These are text messages, so there are different forms of "you" and "u".

For the purposes of this kata, here's what you need to support:

"youuuuu" with any number of u characters tacked onto the end
"u" at the beginning, middle, or end of a string, but NOT part of a word
"you" but NOT as part of another word like youtube or bayou
*/


function replacer(match, p1) {
    return ' your sister' + p1;
}  
function replacerU(match, p1) {
    return ' your sister' + p1;
}  
    
function autocorrect(input){
        
    var newStr = input.replace(/\su\s/gi, ' your sister ');
    newStr = newStr.replace(/\su(\W)/gi, replacerU);
    
    
    newStr = newStr.replace(/\syou+(\W)/gi, replacer);
    newStr = newStr.replace(/\syou+\s/gi, ' your sister ');
    newStr = newStr.replace(/^you+\s/gi, 'your sister ');
    newStr = newStr.replace(/^u\s/gi, 'your sister ');
    newStr = newStr.replace(/\syou+$/gi, ' your sister');
    newStr = newStr.replace(/\su$/gi, ' your sister');
    return newStr;
    

}
