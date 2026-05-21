const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Mongo db connected successfully"))
  .catch((error) => console.log("Error", error.message));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "React Js",
    author: "Mosh",
    tags: ["react", "js", "ts"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourse() {
  const courses = await Course.find({ author: "Mosh" })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourse();
