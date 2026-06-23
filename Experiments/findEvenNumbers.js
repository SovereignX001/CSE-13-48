// Find Even Numbers from an Array

function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example Array
const numbers = [1, 2, 3, 4, 5, 6];

// Output
console.log(findEvenNumbers(numbers));
