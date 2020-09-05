const Interview = require("../models/interview");

module.exports.home = async (req, res) => {
  try {
    const interviews = await Interview.find();
    console.log("interview data", interviews);

    return res.render("interview", { interviews });
  } catch (err) {
    console.log("error in interview page", err);
    return res.render("back");
  }
};

module.exports.createInterview = (req, res) => {
  console.log("inside create interview");

  Interview.create();
};
