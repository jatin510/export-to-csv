const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: "",
  batch: "",
  college: "",
  year: "",
  // can only select from two values
  status: ["placed", "not placed"],
  score: {
    DSA: 1,
    web: 1,
    react: 1,
  },
});
