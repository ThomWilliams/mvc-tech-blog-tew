const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
module.exports = router;


// TOP LEVEL ROUTES - WHAT COMES AFTER THE FIRST SLASH
// Localhost:3001/...
