const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.get("/SeeGoals", (req, res) => {
  Goals.find().then((goals) => {
    res.json(goals);
  });
});

module.exports = router;
