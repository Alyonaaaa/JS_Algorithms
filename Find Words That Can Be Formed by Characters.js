"use strict";

let countCharacters = function(words, chars) {
    let counter = 0;

    const isGood = (word) => {
        let restChars = chars;

        for(let char of word) {
            if(restChars.includes(char)) {
                restChars = chars.replace(char, '');
            
            } else {
                return false;
            }
        }
        return true;
    };

    for (let word of words) {
        isGood(word) ? (counter += word.length) : null;
    }
    return counter;
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));
