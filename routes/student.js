const router = require("express").Router();
const studentController = require("../controllers/student_controller.js");

router.get("/", studentController.home);
router.post("/add", studentController.createStudent);

module.exports = router;
