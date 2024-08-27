/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    // HashMap to store the matching pairs
    const matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (matchingBrackets[char]) {
            // If the character is an opening bracket, push it to the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket, check for its corresponding opening bracket
            const topElement = stack.pop();
            if (matchingBrackets[topElement] !== char) {
                return false;
            }
        }
    }

    // The stack should be empty at the end if the string is valid
    return stack.length === 0;
}

// Time Complexity: O(n), where n is the length of the input string.
// Space Complexity: O(n), for the stack used to store opening brackets.  

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("{()}")); // true
console.log(isValid("{(})")); // false