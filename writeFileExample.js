const fs = require('fs');

// JSON data
const jsonData = {
    name: "Alice",
    age: 30,
    isStudent: false,
    courses: ["Math", "Science", "History"],
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345"
    }
};

// Convert JSON object to string
const jsonString = JSON.stringify(jsonData, null, 2);

// Save JSON string to a file
fs.writeFile('data.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('File written successfully');
    }
});
