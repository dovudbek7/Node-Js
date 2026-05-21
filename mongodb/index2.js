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
  const pageNumber = 2;
  const pageSize = 10;
  return await Course
    // .find({ isPublished: true, tags: "backend" })
    // .find({ price: { $gte: 10, $lte: 15 } })
    .find()
    // .or([{ author: "Mosh" }, { isPublished: true }])
    // .and([{ author: "Mosh" }, { isPublished: true }])
    // .find({ price: { $in: [10, 20, 30] } })

    // Starts with Mosh
    // .find({ author: /^Mosh/ })

    // Ends with Hamedani
    // .find({ author: /Hamedani$/i })

    // Contains Mosh
    // .find({ author: /.*Mosh.*/i })

    // .sort({ name: 1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    // .select({ name: 1, author: 1, price: 1 });
    .countDocuments();
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
