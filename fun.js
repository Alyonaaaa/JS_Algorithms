let filtered = ['7', '5', '10'];
console.log(filtered);

// filtered = filtered.map(element => +element);
// console.log(filtered);

function convert(arr){
    return arr.map(el => +el);
}
console.log(convert(['7', '5', '10']));

function convert(arr){
    return +arr[0] || null;
}
console.log(convert(['0']));


