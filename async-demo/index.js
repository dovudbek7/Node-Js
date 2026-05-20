// Asynchronous
console.log("Before");
getUser(1, function (user) {
  console.log("User", user);

  getRepo("Username", (repo) => {
    console.log("Repo: " + repo);

    getCommits(repo, (commits) => {
      // Calback Hell
    })
  });
});
// console.log(user);
console.log("After");

// Synchronous
console.log("Before");
const user = getUser(1);
const repo = getRepo(user.gitHubUsername);
const commits = getCommits(repos[0]);
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
