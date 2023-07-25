const router = require("./index")

module.exports = function enrouteAPI(app){
    app.use("/api/qr-code", router);
}