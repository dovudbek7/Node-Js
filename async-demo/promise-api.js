// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// const p = Promise.reject("Reason for rejected..."); // Withot other details only the name
// const p = Promise.reject(new Error("Reason for rejected...")); // full Errors with details
// p.catch((error) => console.log(error));

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => console.log(result));
