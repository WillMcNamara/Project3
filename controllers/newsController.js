const db = require("../models");

// Defining methods for the NewsController
module.exports = {
  //grab all news articles
    findAll: function(req, res) {
      db.News.find()
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    },
    //grab one articcle
    findById: function(req, res) {
      db.News.findById(req.params.id)
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    },
    //make new article
    create: function(req, res) {
      db.News.create(req.body)
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    },
    //update article, not in code yet
    update: function(req, res) {
      db.News.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    },
    //delete article
    remove: function(req, res) {
      db.News.findById(req.params.id)
        .then(dbNews => dbNews.remove())
        .then(dbNews => res.json(dbNews))
        .catch(err => res.status(422).json(err));
    }
  };
  