const express = require("express");
const app = express();
app.use(express.json());

const genres = require("./routes/genres");
const home = require("./routes/home");

app.use("/api/genres", genres);
app.use("/", home);

const port = 3000;
// const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
