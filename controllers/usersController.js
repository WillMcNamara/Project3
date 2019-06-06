const db = require("../models");

// Defining methods for the usersController
module.exports = {
    //login
    login: function(req, res) {
      db.Users.find()
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
    },
    //signup
    signup: function(req, res) {
      db.Users.create(req.body)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
    },
  };