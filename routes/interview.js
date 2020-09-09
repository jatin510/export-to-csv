const router = require("express").Router();
const interviewRouter = require("../controllers/interview_controller");

router.get("/", interviewRouter.home);
router.post("/add", interviewRouter.createInterview);
// router.get("/company", interviewRouter.company);

// router.get();
module.exports = router;
