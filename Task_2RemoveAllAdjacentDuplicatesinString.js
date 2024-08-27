/**
 * @param {string} s
 * @return {string}
 */

function removeDuplicates(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove the last character if it matches the current character
        } else {
            stack.push(char); // Push the current character if it does not match the last character
        }
    }

    return stack.join('');
}

// Time Complexity: O(n), where n is the length of the input string.
// Space Complexity: O(n), for the stack used to store the characters.
