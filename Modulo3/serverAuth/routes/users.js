var express = require('express');
var router = express.Router();
const User = require('../models/User.js');
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

/* Register */
router.post('/register', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  User.create({
    username,
    password: hashPass
  })
    .then(() => {
      res.status(200).json('ok');
    })
    .catch(error => {
      res.status(500);
    })

});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.status(401).json('Not found');
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.currentUser = user;
          res.status(200).json(user);

        } else {
          res.status(402).json('Wrog password');
        }
      }
    })
    .catch(error => {
      res.status(401).json('Not found');
    });

});

module.exports = router;
