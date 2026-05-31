module.exports = function (err, req, res, next) {
  // Other Logs
  res.status(500).send("Something failed.");
};
