function solution(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b)

    let x = 1

    for(let I = 0; I < A.length; I++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if(x < A[I]) {
            return x
        }
        x = A[I] + 1
    }
    return x
}
