'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let splitArray = s.split('');
    
    splitArray.forEach(function(element){

        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
            console.log(element)
    }});

    splitArray.forEach(function(element){

        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
            
        }else{
            console.log(element)
        }
    });
    
}
