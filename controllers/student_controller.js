const Student = require("../models/student");

module.exports.createStudent = (req, res) => {
  console.log("inside create student");
  Student.create(req.body, (err, student) => {
    // if error

    console.log("create student");
    if (err) {
      console.log("error creating new student :", err);
      res.render("back");
    }

    return res.render("back");
  });

  return res.render("student");
};
