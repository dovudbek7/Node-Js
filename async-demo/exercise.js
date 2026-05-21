// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

async function displayCostumer() {
  const user = await getCustomer(1);
  console.log("Customer: ", user);
  if (user.isGold) {
    const topMovies = await getTopMovies();
    console.log("Top movies: ", topMovies);
    const email = sendEmail(user.email);
    console.log("Email sent...");
  }
}
displayCostumer();
function getCustomer(id) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("Email sent");
    }, 2000);
  });
}
