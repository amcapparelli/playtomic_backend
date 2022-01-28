const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
  try {
    console.log('entra login');
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;