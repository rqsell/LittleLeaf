const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");
const Goals = require("../models/Goal.js");
const Tasks = require("../models/Task.js");
router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => {
      jwt.sign({ user }, "secretkey", { expiresIn: "30min" }, (err, token) => {
        req.login(user, function (err, result) {
          res.status(201).json({ ...user._doc, token });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/user", verifyToken, (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      // res.status(200).json(authData.user)
      console.log(authData.user, "yolo");
      User.findById(authData.user._id)
        .then((user) => {
          res.status(200).json(user);
        })
        .catch((err) => res.status(500).json(err));
    }
  });
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const { user } = req;
  jwt.sign({ user }, "secretkey", { expiresIn: "30min" }, (err, token) => {
    res.status(200).json({ ...user._doc, token });
  });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
});
router.post("/AddAPost", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      // res.status(200).json(authData.user)
      console.log(authData.user, "yolo");
      let goal = req.body;
      goal.userId = authData.user._id;
      Goals.create(goal).then((goal) => {
        res.json({ goal });
      });
    }
  });
});
router.post("/DeleteAPost", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      // res.status(200).json(authData.user)
      // console.log(authData.user, "yolo");
      console.log(req.body);
      let goal = req.body.id;
      // goal.userId = authData.user._id;
      Goals.findByIdAndDelete(goal).then((goal) => {
        console.log("post deleted!");
        res.json({ goal });
      });
    }
  });
});
router.post("/EditAPost", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      // res.status(200).json(authData.user)
      // console.log(authData.user, "yolo");
      console.log(req.body);
      let goal = req.body.id;
      // goal.userId = authData.user._id;
      Goals.findByIdAndUpdate(goal).then((goal) => {
        console.log("post edited!!");
        res.json({ goal });
      });
    }
  });
});
router.post("/AddTaskDB", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      // res.status(200).json(authData.user)
      console.log(authData.user, "new stuf ahhhh!");
      let task = req.body;
      task.userId = authData.user._id;
      Tasks.create(task).then((task) => {
        res.json({ task });
      });
    }
  });
});

router.get("/GetAllGoal", verifyToken, (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      Goals.find({ userId: authData.user._id }).then((goals) => {
        res.json({ goals });
      });
    }
  });
});

router.post("/getAllTasks", verifyToken, (req, res, next) => {
  console.log(req.body, "debug 3");
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      Tasks.find({ goalId: req.body.goalid }).then((tasks) => {
        console.log(tasks, "debug 4");
        res.json({ tasks });
      });
    }
  });
});
router.get("/getAllEvents", verifyToken, (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      // res.status(200).json(authData.user)
      console.log(authData.user, "tuesday");
      Goals.find({ userId: authData.user._id })
        .then((goals) => {
          Tasks.find({ userId: authData.user._id }).then((tasks) => {
            res.json({ goals, tasks });
          });
        })
        .catch((err) => res.status(500).json(err));
    }
  });
});

router.get("/GetGoals/:id", verifyToken, (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403).json(err);
    } else {
      Goals.findById(req.params.id).then((goal) => {
        res.json({ goal });
      });
    }
  });
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

// Verify Token
function verifyToken(req, res, next) {
  console.log(req.headers, "hockeypuck");
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    console.log(req.headers, " octopus");
    // Forbidden
    res.status(403); //.json({err:'not logged in'});
  }
}

module.exports = router;
