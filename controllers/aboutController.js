const db = require("../models");

// Defining methods for the aboutController
module.exports = {
    findAllBoard: function(req, res) {
        db.Board.find(req.query)
          .then(dbBoard => res.json(dbBoard))
          .catch(err => res.status(422).json(err));
      },
    updateBoard: function(req, res) {
        db.Board.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbBoard => res.json(dbBoard))
          .catch(err => res.status(422).json(err));
      },
    findAllResults: function(req, res) {
        db.Results.find(req.query)
          .then(dbResults => res.json(dbResults))
          .catch(err => res.status(422).json(err));
      },
    updateResults: function(req, res) {
        db.Results.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbResults => res.json(dbResults))
          .catch(err => res.status(422).json(err));
      },

  };
  