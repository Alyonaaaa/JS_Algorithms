"use strict";

function solution(E, L) {
    E = +E.split(":").join("");
    L = +L.split(":").join("");
    let sucTime = parseInt((L - E) / 100);
    let bill; 
    
    if(E == L) {
        bill = 2;
    }
    else if((L - E) % 100) {
        bill = 5 + sucTime * 4;
    }
    else {
        bill = 5 + --sucTime * 4;
    }
    return bill;
}

solution("09:42", "23:42");
