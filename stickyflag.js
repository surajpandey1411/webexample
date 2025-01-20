// Using the sticky flag
const regex = /hello/y;
const str = 'hello world';
console.log(regex.test(str)); // true

// Using the Unicode flag
const regex2 = /\u{1F601}/u; // Unicode smiley face
const str2 = '😁';
console.log(regex2.test(str2)); // true
