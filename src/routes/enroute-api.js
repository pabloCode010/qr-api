const router = require("./router")

module.exports = function enrouteAPI(app){
    app.use("/api/qr-code", router);
}