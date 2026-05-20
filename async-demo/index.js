console.log("Before");
getUser(1, function (user) {
  console.log("User", user);

  getRepo("Username", (repo) => {
    console.log("Repo: " + repo);
  });
});
// console.log(user);
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}

function getRepo(username, callback) {
  setTimeout(() => {
    console.log("Get repo");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
