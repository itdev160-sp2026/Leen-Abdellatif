console.log("=== ASYNC DEMO ===");

// setTimeout
console.log("1");
setTimeout(() => {
  console.log("3");
}, 1000);
console.log("2");

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 500);
});

myPromise.then(result => console.log(result));

// async/await
async function testAsync() {
  const result = await myPromise;
  console.log("Async:", result);
}

testAsync();