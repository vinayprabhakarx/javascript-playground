// --------------------------- PROMISE SIMPLE EXAMPLE --------------------------------

// 1. Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = true; // Change to false to see rejection

        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 2000); // 2 seconds delay
});

// 2. Using .then() and .catch() to handle the Promise
myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// 3. Example with async/await (modern way)
async function handlePromise() {
    try {
        const result = await myPromise;
        console.log("Async/Await Success:", result);
    } catch (error) {
        console.log("Async/Await Error:", error);
    }
}

// Uncomment the line below to run the async/await example
// handlePromise();

// 4. Chaining Promises
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First promise resolved"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second promise resolved"), 1000);
});

promise1
    .then((result1) => {
        console.log(result1);
        return promise2; // Return another promise to chain
    })
    .then((result2) => {
        console.log(result2);
        console.log("Both promises completed!");
    })
    .catch((error) => {
        console.log("Error in chain:", error);
    });

// 5. Promise.all() - Run multiple promises in parallel
const promiseA = Promise.resolve("Promise A");
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B"), 2000));
const promiseC = Promise.resolve("Promise C");

Promise.all([promiseA, promiseB, promiseC])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.log("One of the promises failed:", error);
    });

// 6. Promise.race() - Get the result of the first promise to resolve
const fastPromise = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));

Promise.race([fastPromise, slowPromise])
    .then((result) => {
        console.log("First to resolve:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
