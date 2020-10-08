const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});
router.post("/AddAGoal", (req, res) => {
  Movies.create(req.body).then((goal) => {
    res.json({ goal });
  });
});
module.exports = router;
