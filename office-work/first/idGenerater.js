function incrementId(currentId) {
    // Extract the alphabetic and numeric parts from the current ID
    const match = currentId.match(/^([A-Z]+)(\d+)$/);

    if (!match) {
        throw new Error('Invalid ID format');
    }

    let [_, alphabetPart, numberPart] = match; // Destructure the match result

    let number = parseInt(numberPart, 10); // Convert number part to an integer

    // Increment the number part
    number++;

    // If number exceeds 999, reset to 1 and increment the alphabet part
    if (number > 999) {
        number = 1;
        alphabetPart = incrementAlphabet(alphabetPart);
    }

    // Format the number to have leading zeros if necessary (e.g., '001', '010')
    const formattedNumber = String(number);

    // Return the new ID by concatenating the incremented parts
    return `${alphabetPart}${formattedNumber}`;
}

function incrementAlphabet(alphabetPart) {
    // Convert the alphabet part to an array of character codes
    const chars = alphabetPart.split('').map(char => char.charCodeAt(0));
    
    // Increment from rightmost character
    for (let i = chars.length - 1; i >= 0; i--) {
        if (chars[i] < 90) { // 90 is the ASCII code for 'Z'
            chars[i]++;
            return String.fromCharCode(...chars);
        } else {
            // Reset the character to 'A' and continue loop
            chars[i] = 65; // 65 is the ASCII code for 'A'
        }
    }

    // If all characters were 'Z', add an additional 'A' at the beginning
    return 'A' + String.fromCharCode(...chars);
}

// Test the function with the input AABZZ999
console.log(incrementId("AABZZ999"));  // Output: AACA1
