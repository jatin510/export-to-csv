const router = require("express").Router();
const homeController = require("../controllers/home_controller");
const { home } = require("../controllers/interview_controller");
const passport = require("passport");

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
router.use("/company", passport.checkAuthentication, require("./company"));
router.use("/student", passport.checkAuthentication, require("./student"));
router.use("/interview", passport.checkAuthentication, require("./interview"));
module.exports = router;
