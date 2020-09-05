const router = require("express").Router();

router.get("/", (req, res) => res.send("hello"));
router.use("/student", require("./student"));
// router.get('/')
module.exports = router;
