const express = require('express');

const router = express.Router();

const balanceController = require('../../controllers/balance');

router.post('/fetch', balanceController.fetchBalance);

/**
* export router
*/
module.exports = router;
