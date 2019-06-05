const router = require("express").Router();
const galsController = require("../../controllers/galsController");

// Matches with "/api/gals/image"
router.route("/image/")
  .get(galsController.findAllImg)
  .post(galsController.createImg);

// Matches with "/api/gals/image/:id"
router
  .route("/image/:id")
  .delete(galsController.removeImg);

// Matches with "/api/gals/video"
router
  .route("/video/")
  .get(galsController.findAllVids)
  .post(galsController.createVid);

// Matches with "/api/gals/video/:id"
router
  .route("/video/:id")
  .delete(galsController.removeVid);

module.exports = router;
