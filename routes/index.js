const express = require('express');

const router = express.Router();

const core = require('./core');
const balance = require('./balance');
const trades = require('./trades');


/**
* all routes starting api /routes/core router
*/
router.use('/', core);
router.use('/balance', balance);
router.use('/trades', trades);

/**
* export router
*/
module.exports = router;
