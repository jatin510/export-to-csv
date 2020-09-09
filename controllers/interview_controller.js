const Interview = require("../models/interview");
const Student = require("../models/student");
const Company = require("../models/company");

module.exports.home = async (req, res) => {
  try {
    const interviews = await Interview.find({})
      .populate("student")
      .populate("company");

    const students = await Student.find();
    const companies = await Company.find();

    return res.render("interview", { interviews, companies, students });
  } catch (err) {
    console.log("error in interview page", err);
    return res.render("back");
  }
};

module.exports.createInterview = (req, res) => {
  console.log("inside create interview");

  Interview.create(req.body, (err, interview) => {
    if (err) {
      console.log("error creating the interview, ", err);
      return;
    }

    console.log("interview created ", interview);
  });

  return res.redirect("back");
};

module.exports.company = (req, res) => {
  return res.render("company_interview", { company });
};
