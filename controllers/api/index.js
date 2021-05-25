const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboard = require('./dashboard');

router.use('/users', userRoutes);
router.use('/dashboard', dashboard);