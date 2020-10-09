const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.get("/SeeGoals", (req, res) => {
  Goals.find().then((goals) => {
    res.json(goals);
  });
});
// router.get("/SeeGoals:id", (req, res) => {
//   console.log(req.params.id);
//   Goals.findById(req.params.id).then((goal) => {
//     res.json({ goal });
//   });
// });

module.exports = router;
