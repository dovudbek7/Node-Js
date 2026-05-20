const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());

const courses = [
  { id: 1, name: "Genre1" },
  { id: 2, name: "Genre2" },
  { id: 3, name: "Genre3" },
];

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app.get("/api/genres", (req, res) => {
  res.send(courses);
});

app.get("/api/genres/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send("Unavailable Genre");
  res.send(course);
});
app.get("/api/genres/:id", (req, res) => {
  res.send(req.query);
});

app.post("/api/genres", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
  });
  const result = schema.validate(req.body);
  console.log(result);

  if (result.error) return res.status(400).send(result.error);

  //   if (!req.body.name || req.body.name.length < 3) {
  //     res.status(400).send("Name is required");
  //     return;
  //   }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/genres/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Unavailable Genre");

  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
});

app.delete("/api/course/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Unavailable Genre");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}
const port = 3000;
// const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
