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
    authors: [authorSchema],
  }),
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}
// async function createAuthor(name, bio, website) {
//   const author = new Author({
//     name,
//     bio,
//     website,
//   });

//   const result = await author.save();
//   console.log(result);
// }

async function listCourses() {
  const courses = await Course.find()
    .select("name author")
    .populate("author", "name");

  console.log(courses);
}
// async function updateCourse(courseId) {
//   const course = await Course.findById(courseId);
//   course.authors.name = "Mosh Hamedani";
//   course.save();
// }

// createCourse("Node Course", "6a19638705bcc5d8bda83532");
// createCourse("Node Course", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "Alex" }),
// ]);

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.deleteOne();
  course.save();
}

// addAuthor("6a1a8145706fb9bd2890dad2", new Author({ name: "Ann" }));
removeAuthor("6a1a8145706fb9bd2890dad2", "6a1a8271de429969c600bb39");
// createAuthor("Mosh", "My bio", "My website");

// updateCourse("6a1a7e6f44537bb574bc7d28");

// listCourses();
