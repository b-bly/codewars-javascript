/*
function toCamelCase(str){
    var index = str.search(/\-|_/);
    while (index !== -1) {
        
        str = str.replace(/\-\w|_\w/, str[index + 1].toUpperCase());
        index = str.search(/\-|_/);
    }
    return str;
}

*/

function toCamelCase(str){
    var index = str.search(/\-|_/);
    while (index !== -1) {
        
        str = str.replace(/\-\w|_\w/, str[index + 1].toUpperCase());
        index = str.search(/\-|_/);
    }
    return str;
}

