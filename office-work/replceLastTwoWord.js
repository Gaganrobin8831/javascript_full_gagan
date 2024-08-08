function replaceLastCharacters(str) {
    // Check if the string length is less than 2
    if (str.length < 2) {
        return 'The string must contain at least two characters.';
    }

    // Replace the second last character with "BB" and the last character with "A"
    const result = str.slice(0, -2) + 'BB' + 'A';

    return result;
}

// Test case
console.log(replaceLastCharacters("Gagan")); // Output: "GagBBA"
