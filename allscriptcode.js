// 1. Using let and const
const appName = "My ES6+ App";
let version = "1.0.0";

// 2. Enhanced Object Literals
const developer = {
  name: "John Doe",
  skills: ["JavaScript", "React", "Node.js"],
  greet() {
    return `Hello, I'm ${this.name}, a JavaScript developer.`;
  },
};
console.log(developer.greet());

// 3. Destructuring
const { name, skills } = developer;
console.log(`${name}'s skills:`, skills);

// 4. Template Literals
const message = `Welcome to ${appName}, version ${version}!`;
console.log(message);

// 5. Arrow Functions
const multiply = (a, b) => a * b;
console.log(`Multiplication Result: ${multiply(4, 5)}`);

// 6. Promises and Async/Await
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();

// 7. Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}
const product = new Product("Laptop", 999.99);
console.log(product.getDetails());

// 8. Modules (Example assumes modular environment)
// Exported from 'math.js'
// export const add = (x, y) => x + y;
// Importing in another file
// import { add } from './math.js';
// console.log(`Sum: ${add(3, 7)}`);

// 9. Spread and Rest Operators
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log("New Array:", newArr);

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum(1, 2, 3, 4, 5));

// 10. Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!

// 11. Regular Expressions
const regex = /ES6\+/g;
const testStr = "Learning ES6+ features is fun!";
console.log("Contains ES6+:", regex.test(testStr));