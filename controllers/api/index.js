const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentsRoutes = require('./commentsRoutes');


// The routes that the router should use to access user requests
router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentsRoutes)

module.exports = router;