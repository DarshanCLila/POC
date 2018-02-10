const express = require('express');

const router = express.Router();

const tradesController = require('../../controllers/trades');

router.post('/fetch', tradesController.fetchTrades);

/**
* export router
*/
module.exports = router;
