const joi = require('joi');

const createCodeSchema = joi.object({
    text: joi.string().min(3).max(100).required(),
    darkColor: joi.string().min(3).max(6).default("#000"),
    lightColor: joi.string().min(3).max(6).default("#fff"),
    type: joi.string().valid("png", "svg").min(3).max(10).default("png")
})

module.exports = createCodeSchema;