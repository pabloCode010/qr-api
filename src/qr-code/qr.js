const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    const options = {
      errorCorrectionLevel: 'H', // Niveles de corrección de errores: L (7%), M (15%), Q (25%), H (30%)
      type: 'image/png', // Formato de la imagen
      quality: 1, // Calidad de la imagen (0.1 - 1.0)
      margin: 1, // Margen en blanco alrededor del código QR
    };

    const codigoQR = await QRCode.toBuffer(text);
    return codigoQR;
  } catch (error) {
    throw error;
  }
};

module.exports = generateQRCode;
