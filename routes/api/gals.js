const router = require("express").Router();
const galsController = require("../../controllers/galsController");

// Matches with "/api/gals/image"
router.route("/images/")
  .get(galsController.findAllImg)
  .post(galsController.createImg);

// Matches with "/api/gals/image/:id"
router
  .route("/images/:id")
  .delete(galsController.removeImg);

// Matches with "/api/gals/video"
router
  .route("/videos/")
  .get(galsController.findAllVid)
  .post(galsController.createVid);

// Matches with "/api/gals/video/:id"
router
  .route("/videos/:id")
  .delete(galsController.removeVid);

module.exports = router;
