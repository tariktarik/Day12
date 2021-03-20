// Only change code below this line
function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

//Only change code above this line

console.log(myCounter(-1)); // change this line
console.log(myCounter(10)); // change this line
console.log(myCounter(5)); // change this line
module.exports = myCounter;