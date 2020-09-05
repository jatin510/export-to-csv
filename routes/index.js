const router = require("express").Router();
const homeController = require("../controllers/home_controller");
router.get("/", homeController.home);
router.get("/signup", (req, res) => res.render("signup"));
router.get("/signin", (req, res) => res.render("signin"));
router.use("/company", require("./company"));
router.use("/student", require("./student"));
router.use("/interview", require("./interview"));
// router.get('/')
module.exports = router;
