const db = require("../models");

// Defining methods for the usersController
module.exports = {
    //login
    login: function(req, res) {
      db.News.find({})
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    },
    //signup
    signup: function(req, res) {
      db.News.create(req.body)
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    },
  };