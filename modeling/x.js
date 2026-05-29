// Trade of between PERFORMANCE and CONSISTENCY

// Using References ( normolization ) => CONSISTENCY
let author = {
  name: "Mosh",
};
let course = {
  author: "id",
};

// Using embedded Documents ( Denormolization ) => PERFORMANCE
let course = {
  author: {
    name: "Mosh",
  },
};

// Hybrid
let author = {
  name: "Mosh",
  // Other props...
};
let course = {
  author: {
    id: "ref",
    name: "Mosh",
  },
};
