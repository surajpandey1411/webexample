// Creating a new promise
let promise = new Promise(function(resolve, reject) {
    // Simulating an asynchronous task (e.g., a network request)
    setTimeout(function() {
        let success = true; // Change to false to simulate an error
        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Task failed!");
        }
    }, 2000);
});

// Using the promise
promise.then(function(message) {
    console.log(message); // This will run if the promise is resolved
}).catch(function(error) {
    console.error(error); // This will run if the promise is rejected
});
