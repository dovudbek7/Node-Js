const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: authorSchema,
      requored: true,
    },
  }),
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}
async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find()
    .select("name author")
    .populate("author", "name");

  console.log(courses);
}
async function updateCourse(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = "Mosh Hamedani";
  course.save();
}

// createCourse("Node Course", "6a19638705bcc5d8bda83532");
// createCourse("Node Course", new Author({ name: "Mosh" }));
// createAuthor("Mosh", "My bio", "My website");

updateCourse("6a1a7e6f44537bb574bc7d28");

// listCourses();
