const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Mongo db connected successfully"))
  .catch((error) => console.log("Error", error.message));
