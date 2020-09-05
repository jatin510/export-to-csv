const Company = require("../models/company");

module.exports.home = async (req, res) => {
  try {
    companies = await Company.find();
    console.log("company data ", companies);
    return res.render("company", { companies });
  } catch (err) {
    console.log("error company page", err);
    return res.render("back");
  }
};

module.exports.createEmployee = (req, res) => {
  console.log("inside create company");

  Company.create(req.body, (err, company) => {
    // if error
    if (err) {
      console.log("error creating company data ", err);
    }
  });

  console.log("error creating compnay data");
  return res.redirect("/company");
};
