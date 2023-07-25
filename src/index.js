const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const enrouteApi = require('./routes/enroute-api');
const morgan = require('morgan');
const handler = require('./err/handler');

app.use(morgan("combined"));

enrouteApi(app);

app.use(handler);

app.use((req, res) => {
    res.status(404).send("<h1 > 404 Page Not Found </h1>");
})

app.listen(port, console.log(`http://localhost:3000`));