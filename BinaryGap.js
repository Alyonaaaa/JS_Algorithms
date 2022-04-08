"use strict";

// #1
function solution(N) {
    // e.g. 1041 => 10000010001 => [“”, 00000, 000, “”]
    N = N.toString(2).split('1');
    let gaps = [];
    for (let I = 0; I < N.length; I++) {
        gaps[I] = N[I].length;
        
	  // exclude edge cases: first and last element is 0 in 10000010001
        if(gaps[N.length-1] != '') {
            gaps[N.length-1] = 0;
        } 
        if(gaps[0] != '') {
            gaps[0] = 0;
        } 
    }   
    gaps = gaps.sort((a, b) => a - b);
    return(gaps[--N.length]);
}

console.log(solution(32));

// #2
function solution(N) {
    // e.g. 32 => 100000
    N = N.toString(2);
    let I = 0;
    let n = 0;
    let gaps = [];
    while(I < N.length)  {
        let m = 0;
        while(N[I] == 0 && I < N.length) {
            m++;
            I++;
        } 
	    // creating new array in which m = #0 in n-gap
        gaps[n] = m; 
        n++;
        I++;  
    }
    // exclude edge cases: if first or last elements = 0 in N => in gaps should 0
    if(N[N.length-1] == 0) {
	   // n -1 because last n++ too much
        gaps[n-1] = 0;
    }
    if(N[0] == 0) {
        gaps[0] == 0;
    }
    gaps = gaps.sort((a, b) => a - b);
    return(gaps[n-1]);
}

console.log(solution(32));
