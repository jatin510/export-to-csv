const mongoose = require("mongoose");

const Score = new mongoose.Schema({
  DSA: Number,
  web: Number,
  react: Number,
});

const studentSchema = new mongoose.Schema({
  name: String,
  batch: String,
  college: String,
  year: String,
  // can only select from two values
  status: { type: String, enum: ["Placed", "Not Placed"] },
  score: Score,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
