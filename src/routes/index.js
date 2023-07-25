const { Router } = require('express');
const router = Router();

const getCode = require('./create-code');

router.get("/create", getCode);

module.exports = router;