// basic schema

// {
//     company : Ref,
//     student : Ref,
//     Date : '',
//     result : [placed , not, hold,didnot attempt ]

const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    date: {
      type: Date,
      required: true,
    },
    result: {
      type: String,
      enum: ["Pass", "Fail", "On Hold", `Didn't Attempt`],
    },
  },
  { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
