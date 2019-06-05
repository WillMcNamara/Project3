const db = require("../models");

// Defining methods for the GalsController
module.exports = {
    findAllImg: function(req, res) {
      db.Images.find(req.query)
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err));
    },
    createImg: function(req, res) {
      db.Images.create(req.body)
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err));
    },
    removeImg: function(req, res) {
      db.Images.findById(req.params.id)
        .then(dbImages => dbImages.remove())
        .then(dbImages => res.json(dbImages))
        .catch(err => res.status(422).json(err));
    },
    findAllVid: function(req, res) {
      db.Videos.find(req.query)
        .then(dbVideos => res.json(dbVideos))
        .catch(err => res.status(422).json(err));
    },
    createVid: function(req, res) {
      db.Videos.create(req.body)
        .then(dbVideos => res.json(dbVideos))
        .catch(err => res.status(422).json(err));
    },
    removeVid: function(req, res) {
      db.Videos.findById(req.params.id)
        .then(dbVideos => dbVideos.remove())
        .then(dbVideos => res.json(dbVideos))
        .catch(err => res.status(422).json(err));
    }
    };
    