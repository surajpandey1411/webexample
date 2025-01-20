// Example object using ES6 features
const propName = 'age';

const person = {
  // Object Literal Enhancement
  name: 'Ravi',
  [propName]: 30, // Computed Property Name
  greet() { // Method Definition
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Using the object
person.greet(); // Logs: "Hello, my name is Ravi and I am 30 years old."

// Destructuring Assignment
const { name, age } = person;
console.log(name); // Logs: "Ravi"
console.log(age);  // Logs: 30
