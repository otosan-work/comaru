const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
const server = require("http").Server(app);

const get = require('./api/get');

app.use('/api/v1', get);
app.use('/', express.static(`${__dirname}/static`));

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
