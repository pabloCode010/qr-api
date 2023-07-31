module.exports = function notFound(req, res, next){
    try {
        const error = new Error("este elemento no esta disponible");
        error.status = 404;
        next(error);
    } catch (error) {
        next(error);
    }
}