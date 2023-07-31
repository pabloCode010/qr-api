const QRCode = require('qrcode');

const generateQRCode = async (text, options) => {
  try {
    const color =  { dark: options.darkColor, light: options.lightColor }
    if (options.type == "svg"){
      return QRCode.toString(text, {color, ...options});
    }
    return QRCode.toBuffer(text, {color, ...options});
  } catch (error) {
    throw error;
  }
};

module.exports = generateQRCode;
