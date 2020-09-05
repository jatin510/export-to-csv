const router = require("express").Router();
const studentController = require("../controllers/student_controller.js");

router.get("/", (req, res) => res.render("student"));
router.post("/add", studentController.createStudent);

module.exports = router;
