const startupDebugger = require("debug")("app:startup"); // second is function
const dbDebugger = require("debug")("app:db");
const express = require("express");
const config = require("config");
const app = express();
const Joi = require("joi");
const { log, auth } = require("./middleware/logger");
app.use(express.json());
const helmet = require("helmet");
const morgan = require("morgan");

const courses = require("./routes/courses");
const home = require("./routes/home");

// console.log(`NODE_ENV ${process.evn}`);
// console.log(`app ${app.get("env")}`);

console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.password"));

app.use(log);
app.use(auth);
app.use(helmet());
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

app.use("/api/courses", courses);
app.use("/", home);
const port = 3000;
// const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
