const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Mongo db connected successfully"))
  .catch((error) => console.log("Error", error.message));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10,
    max: 200,
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "React Js",
    author: "Mosh",
    tags: ["react", "js", "ts"],
    isPublished: true,
    price: 12,
  });

  try {
    // await course.validate()
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

async function getCourse() {
  const courses = await Course.find({ author: "Mosh" })
    .find({})
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
createCourse();
