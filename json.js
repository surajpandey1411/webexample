const fs = require('fs');

// Reading JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    let jsonObject = JSON.parse(data);
    console.log(jsonObject.name); // Outputs: Alice
});

// Writing JSON file
let jsonObject = { name: "Alice", age: 30, isStudent: false };
let jsonString = JSON.stringify(jsonObject);
fs.writeFile('data.json', jsonString, 'utf8', (err) => {
    if (err) throw err;
    console.log('JSON data is saved.');
});
