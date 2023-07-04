const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const noteRoutes = require("./note-routes.js");

router.use("/api", apiRoutes);

router.use("/", homeRoutes);
router.use("/notes", noteRoutes);

module.exports = router;
