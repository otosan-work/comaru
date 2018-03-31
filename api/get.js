const database = require('./database');
const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  database.find(req.query).then(records => {
    res.contentType('json');
    res.send({ Response: records });
  }).catch(error => {
    throw error;
  });
});

module.exports = router;
