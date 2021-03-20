// Only change code below this line
function sumFibonacci(num) {
    var sum = 0;
    var fibArr = [0, 1];
    var i = 2;
    for (i = 2; i <= num; i++) {
        if (fibArr[i - 1] <= num) {
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
        }
    }
    if (fibArr[fibArr.length - 1] > num) {
        fibArr.pop();
    }
    for (var i = 0; i < fibArr.length; i++) {
        if (fibArr[i] % 2 !== 0) {
            sum += fibArr[i];
        }
    }
    return sum;
}

// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;