const router = require("express").Router();
const newsController = require("../../controllers/newsController");

// Matches with "/api/users"
router.route("/login")
  .post(usersController.login);

// Matches with "/api/users/"
router
  .route("/signup")
  .post(usersController.signup);

module.exports = router;
