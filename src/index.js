const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const enrouteApi = require('./routes/enroute-api');
const morgan = require('morgan');
const handler = require('./err/handler');
const notFound = require('./err/not-found');

// app.use(morgan("dev"));

enrouteApi(app);

app.use(notFound);

app.use(handler);

app.listen(port, console.log(`http://localhost:3000/api/qr-code/create?text=hola%20mundo`));