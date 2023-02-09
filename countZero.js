function CountZero(str) {
    let count=0;

    for (let index = 0; index < str.length; index++) {
        if (str[index] == '0') {
            count++;
            
        }
       
    }
    return count
    
}

console.log(CountZero('0111000'));