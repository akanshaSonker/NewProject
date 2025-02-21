const express = require('express');
const { processData, getOperationCode } = require('./utils');

const router = express.Router();

router.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

router.post('/bfhl', (req, res) => {
    processData(req, res);
});

module.exports = router;
