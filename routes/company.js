const router = require("express").Router();
const companyController = require("../controllers/company_controller");

router.get("/", companyController.home);
router.post("/add", companyController.createEmployee);
module.exports = router;
