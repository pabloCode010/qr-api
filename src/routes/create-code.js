const generateQRCode = require("../qr-code/qr");

module.exports = async function getCode(req, res, next) {
  try {
    const { text, download } = req.query;
    const codigoQR = await generateQRCode(text, req.query);

    if (req.query.type === "png"){
      res.setHeader('Content-Type', "image/png");
    }
    if (download){
      res.setHeader('Content-Disposition', `attachment; filename="codigo_qr.${req.query.type}"`);
    }

    res.status(200).end(codigoQR);
  } catch (error) {
    next(error);
  }
};