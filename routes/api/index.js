const path = require("path");
const router = require("express").Router();
const newsRoutes = require("./news");
const galsRoutes = require("./gals");
const usersRoutes = require("./users");

// routes
router.use("/news", newsRoutes);
router.use("/gals", galsRoutes);
router.use("/users", usersRoutes);
// router.use("/about", aboutRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
