/*

function createPhoneNumber(numbers){
    var number = '(' + numbers.slice(0,3).join('') + ') ';
    number += numbers.slice(3,6).join('');
    number += '-' + numbers.slice(6, 10).join('');
    return number;    
}
*/

function createPhoneNumber(numbers){
    var number = '(' + numbers.slice(0,3).join('') + ') ';
    number += numbers.slice(3,6).join('');
    number += '-' + numbers.slice(6, 10).join('');
    return number;    
}
