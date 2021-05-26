const router = require('express').Router();
const apiRoutes = require('./api')
const withAuth = require('../utils/auth')

router.use('/api', withAuth, apiRoutes);
module.exports = router;


