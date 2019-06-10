const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/login")
  .post(usersController.login);

// Matches with "/api/users/"
router
  .route("/signup")
  .post(usersController.signup);

module.exports = router;
