const generateQRCode = require("../qr-code/qr");

module.exports = async function getCode(req, res, next){
    try {
        const { text } = req.query
        const codigoQR =  await generateQRCode(text);
        res.setHeader('Content-Type', 'image/png');
        res.end(codigoQR)
    } catch (error) {
        next(error);
    }
}