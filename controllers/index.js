const router = require('express').Router();

const homeRoutes = require("./home-routes.js");
const noteRoutes = require('./note-routes.js');

router.use("/", homeRoutes);
router.use("/notes", noteRoutes);

module.exports = router;