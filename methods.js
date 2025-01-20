const str = 'JavaScript is fun!';
const regex = /fun/;
console.log(regex.test(str)); // true
console.log(str.match(regex)); // ['fun']
console.log(str.replace(regex, 'awesome')); // 'JavaScript is awesome!'
console.log(str.search(regex)); // 16
console.log(str.split(regex)); // ['JavaScript is ', '!']
