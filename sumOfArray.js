// Sum of All Numbers in an Array

function sumOfArray(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}

// Example Array
const numbers = [1, 2, 3, 4, 5];

// Output
console.log(sumOfArray(numbers));
