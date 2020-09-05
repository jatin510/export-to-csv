// schema;

// name:'',
// address :'',
// info : '',
// stackworking : '',
// openings : ''

const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    openings: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
