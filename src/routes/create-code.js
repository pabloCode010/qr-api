const generateQRCode = require("../qr-code/qr");

module.exports = async function getCode(req, res, next) {
  try {
    const { text } = req.query;
    const codigoQR = await generateQRCode(text, req.query);

    // Establecer el encabezado Content-Type según el tipo de imagen especificado
    res.setHeader('Content-Type', `image/${req.query.type}`);

    // Establecer el encabezado Content-Disposition para enviar como descarga
    res.setHeader('Content-Disposition', `attachment; filename="codigo_qr.${req.query.type}"`);

    res.status(200).send(codigoQR);
  } catch (error) {
    next(error);
  }
};
