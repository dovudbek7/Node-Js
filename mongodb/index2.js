const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises");

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course
    // .find({ isPublished: true, tags: "backend" })
    // .find({ price: { $gte: 10, $lte: 15 } })
    .find()
    // .or([{ author: "Mosh" }, { isPublished: true }])
    .and([{ author: "Mosh" }, { isPublished: true }])
    // .find({ price: { $in: [10, 20, 30] } })
    .sort({ name: 1 })
    .select({ name: 1, author: 1, price: 1 });
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();

`
eq: (equal)
ne: (not equal)
gt: (greater than)
gte: (greater than or equal)
lt: (less than)
lte: (less than or equal)
in
nin: (not in)
`;
