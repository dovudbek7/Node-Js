// const p = Promise.resolve({ id: 1 });
// p.then((result) => console.log(result));

// const p = Promise.reject("Reason for rejected..."); // Withot other details only the name
const p = Promise.reject(new Error("Reason for rejected...")); // full Errors with details
p.catch((error) => console.log(error));
