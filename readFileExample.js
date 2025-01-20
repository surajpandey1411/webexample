const fs = require('fs');

// Read JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file', err);
    } else {
        // Parse and display JSON content
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    }
});
