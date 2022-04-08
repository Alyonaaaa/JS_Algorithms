function toCamelCase(str) {
    // search for '-' and '_' => if found, split string into arrays. Else, leave string as it is
    if((str.includes('-') || str.includes('_')) && str.length != Infinity) {
        if(str.includes('-')) {
            str = str.split('-');
        } 
        if(str.includes('_')) {
            str = str.split('_');
        }

        // each element of resulting array 'str' split into subarrays
        for(let i = 0; i < str.length; i++) {
            str[i] = str[i].split('');
            // for every subarray, starting from subarray 1, change 0-element to uppercase 
            for(let m = 1; m < str.length; m++) {
                str[m][0] = str[m][0].toUpperCase();
            }
            // connect subarrays into strings
            str[i] = str[i].join('');
        }
        // connect arrays into string
        return str.join('');
    }
    else {
        return str;
    }
}

console.log(toCamelCase("the_stealth_warrior"));
