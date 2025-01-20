// ES6 Regular Expression Flags: 'u' for Unicode, 'y' for sticky search
const regex = /hello/y; // Using the 'y' flag for sticky searching

const str = 'hello hello';

// Sticky search only matches at the exact position in the string
console.log(regex.test(str)); // Logs: true
console.log(regex.lastIndex); // Logs: 0

// Advancing to the next position manually
regex.lastIndex = 6;
console.log(regex.test(str)); // Logs: true
console.log(regex.lastIndex); // Logs: 0

// ES6 String Methods with Regex: includes, startsWith, endsWith
const sentence = 'Hello world!';
console.log(sentence.includes('world')); // Logs: true
console.log(sentence.startsWith('Hello')); // Logs: true
console.log(sentence.endsWith('!')); // Logs: true

// Practical example: Validating an email address
const email = 'example@example.com';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test(email)); // Logs: true

// Using ES6 template literals for dynamic regex patterns
const dynamicPart = 'example';
const dynamicRegex = new RegExp(`^${dynamicPart}@\\S+\\.\\S+$`);

console.log(dynamicRegex.test(email)); // Logs: true
