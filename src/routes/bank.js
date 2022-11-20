const express = require('express');
const { getAccounts, getAccountByNumberAccount } = require('../controller/bank');

const router = express.Router();

router.get('/getAccounts', getAccounts);
router.get('/getAccountByNumberAccount/:id', getAccountByNumberAccount);

module.exports = router;
