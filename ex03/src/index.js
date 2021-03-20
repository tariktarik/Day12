// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (endN < startN) {
        if (endN + 1 === startN) {
            return [];
        } else {
            var errorMessage = "The starting number will always be less than or equal to the ending number";
            return errorMessage;
        }
    } else {
        const countArray = rangeOfNumbers(startN, endN - 1);
        countArray.push(endN);
        return countArray;
    }
}
// Only change code above this line
console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10)); // Change this line
console.log(rangeOfNumbers(5, 5)); // Change this line
console.log(rangeOfNumbers(7, 5)); // Change this line
module.exports = rangeOfNumbers;