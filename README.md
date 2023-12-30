## QR API
Esta API, construida con Express.js y alimentada por el módulo qrCode, te permite crear códigos QR personalizados ajustando varios parámetros.

## Parámetros
- **text:** El contenido que se codificará en el código QR.
- **darkColor:** Color de fondo (no necesariamente oscuro).
- **lightColor:** Color para el propio código QR.
- **type:** Tipo de imagen, ya sea PNG o SVG.

## Ejemplos de Uso
- [Generar código QR en PNG](https://qr-api-alpha.vercel.app/api/qr-code/create?text=hello&darkColor=d90429&lightColor=edf2f4&type=png)
- [Generar código QR en SVG](https://qr-api-alpha.vercel.app/api/qr-code/create?text=hello&darkColor=d90429&lightColor=edf2f4&type=svg)

## Descargar
- [Descargar código QR en SVG](https://qr-api-alpha.vercel.app/api/qr-code/create?text=hello&darkColor=d90429&lightColor=edf2f4&type=svg&download=true)
