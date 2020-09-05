const Student = require("../models/student");

module.exports.home = async (req, res) => {
  try {
    students = await Student.find();
    // console.log("students data", students);

    return res.render("student", { students });
  } catch (err) {
    console.log("error student page ", err);
    return res.render("back");
  }
};

module.exports.createStudent = (req, res) => {
  console.log("inside create student");

  console.log(req.body);
  student = {};
  student = {
    ...req.body,
    score: {
      DSA: req.body.DSA,
      web: req.body.web,
      react: req.body.react,
    },
  };
  Student.create(student, (err, student) => {
    // if error

    console.log("create student");
    if (err) {
      console.log("error creating new student :", err);
    }
  });

  return res.redirect("/student");
};
