// instanciando modulo express
const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('layouts/home');
});

module.exports = router;