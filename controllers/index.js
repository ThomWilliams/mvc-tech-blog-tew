const router = require("express").Router();
const apiRouter = require("./api");
const homeRouter = require("./homeRoutes");


router.use("/", homeRouter);
router.use("/api", apiRouter);


module.exports = router;





// TOP LEVEL ROUTES - WHAT COMES AFTER THE FIRST SLASH
// Localhost:3001/...
