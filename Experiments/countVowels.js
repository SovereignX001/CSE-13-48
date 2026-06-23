// Count Vowels in a String

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example
console.log(countVowels("javascript"));
