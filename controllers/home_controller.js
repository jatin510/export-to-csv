const Employee = require("../models/employee");
const Interview = require("../models/interview");
const Student = require("../models/student");
const Company = require("../models/company");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

module.exports.home = (req, res) => {
  return res.render("home");
};

module.exports.exportToCSV = async (req, res) => {
  try {
    const interviews = await Interview.find({})
      .populate("student")
      .populate("company");

    // csv writer
    const csvWriter = createCsvWriter({
      path: "out.csv",
      header: [
        { id: "student_id", title: "Student Id" },
        { id: "student_name", title: "Student Name" },
        { id: "student_college", title: "Student College" },
        { id: "student_status", title: "Student Status" },
        { id: "dsa", title: "DSA Final Score" },
        { id: "web", title: "WebD Final Score" },
        { id: "react", title: "React Final Score" },
        { id: "interview_date", title: "Interview Date" },
        { id: "interview_company", title: "Interview Company" },
        { id: "interview_result", title: "Interview Student Result" },
      ],
    });

    var finalData = [];

    for (interview of interviews) {
      let data = {};

      data.student_id = interview.student._id;
      data.student_name = interview.student.name;
      data.student_college = interview.student.college;
      data.student_status = interview.student.status;
      data.dsa = interview.student.score.DSA;
      data.web = interview.student.score.web;
      data.react = interview.student.score.react;
      data.interview_date = interview.date;
      data.interview_company = interview.company.name;
      data.interview_result = interview.result;

      finalData.push(data);
    }

    console.log("creating csv", finalData);
    csvWriter
      .writeRecords(finalData)
      .then(() => console.log("The CSV file was written successfully"))
      .catch((err) => console.log("error creating csv", err));

    return res.redirect("back");
  } catch (err) {
    console.log("Error  ", err);
    return res.redirect("back");
  }
};

module.exports.createEmployee = (req, res) => {};
