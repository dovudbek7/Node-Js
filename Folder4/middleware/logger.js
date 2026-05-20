function log(req, res, next) {
  console.log("Loggins...");
  next();
}
function auth(req, res, next) {
  console.log("Authanticating...");
  next();
}
module.exports = { log, auth };
