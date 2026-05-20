const p = new Promise((resolve, rejected) => {
  //Kick off
  setTimeout(() => {
    //   resolve(1);
    rejected(new Error("Message1"));
  }, 2000);
});

p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message),
);
