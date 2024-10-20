// Basic function that returns a promise after 2 seconds
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

// Using async/await to handle the promise
async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();  // Asynchronous operation
    console.log(data);               // logs: "Data received" after 2 seconds
}

// getData();

function fetchProduct(productId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Product ${productId}`), 1000);
    });
}

async function getMultipleProducts() {
    const promise1 = fetchProduct(1);
    const promise2 = fetchProduct(2);
    const promise3 = fetchProduct(3);

    // Use Promise.all to wait for all promises to resolve
    const products = Promise.all([promise1, promise2, promise3]);
    console.log("mcmcmcmc",products);  // Logs: [ 'Product 1', 'Product 2', 'Product 3' ]
}

getMultipleProducts();
