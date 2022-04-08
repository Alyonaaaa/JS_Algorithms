"use strict";

function solution(A, K) {
    let N = A.length;
    let R = [];
    let I = 0;
    
    if((K % N) == 0) {
        while(I < N) {
            R[I] = A[I];
            I++;    
        }
    }
    else {
        let stepsForward = 0;
        if(N > K) {
            stepsForward = K;
        } 
        if(N < K) {
            stepsForward = K % N;
        }
        let stepsBackward = N - stepsForward;        
        while(I < (N - stepsForward)) {
            R[I + stepsForward] = A[I];
            I++;
        }
        while(I < N) {
            R[I - stepsBackward] = A[I];
            I++;
        }
    }
    return(R);
}     

console.log(solution([3, 8, 9, 7, 6], 3));
