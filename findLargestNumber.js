// Find the Largest Number in an Array

function findLargestNumber(arr) {
    let largest = arr[0];

    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

// Example Array
const numbers = [10, 45, 2, 99, 23];

// Output
console.log(findLargestNumber(numbers));
