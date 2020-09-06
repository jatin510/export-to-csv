const router = require("express").Router();
const homeController = require("../controllers/home_controller");
const { home } = require("../controllers/interview_controller");

router.get("/", homeController.home);
// employee
router.get("/signup", (req, res) => res.render("signup"));
router.post("/create", homeController.createEmployee);
router.get("/signin", (req, res) => res.render("signin"));
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/signin" }),
  homeController.createSession
);
router.get("/signout", homeController.destroySession);

// middlewares
router.use("/company", require("./company"));
router.use("/student", require("./student"));
router.use("/interview", require("./interview"));
module.exports = router;
