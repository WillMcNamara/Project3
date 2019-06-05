const router = require("express").Router();
const newsController = require("../../controllers/aboutController");

// Matches with "/api/about/board"
router.route("/board")
  .get(newsController.findAllBoard)
  .put(newsController.updateBoard);

// Matches with "/api/about/results"
router
  .route("/results/")
  .get(newsController.findAllResults)
  .put(newsController.updateResults)

module.exports = router;
