const { Router } = require('express');
const router = Router();

const getCode = require('./create-code');
const validateSchema = require('../middlewares/validate-schema');
const createCodeSchema = require('../schemas/create-code');

router.get("/create",
    validateSchema(createCodeSchema,"query"),
    getCode
);

module.exports = router;