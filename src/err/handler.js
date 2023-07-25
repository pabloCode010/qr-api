module.exports = function handler(err, req, res, next){
    res.status(500).send("<h1>500 Internal Server Error </h1>");
}