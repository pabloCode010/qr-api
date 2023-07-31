module.exports = function validateSchema(schema, property){
    return (req, res, next) => {
        try {
            const { error, value } = schema.validate(req[property], {abortEarly: false});
            if (error){
                error.status = 400;
                return next(error)
            }
            req.query = value
            next()
        } catch (error) {
            next(error);
        }
    }
}