const express = require('express');
const router = express.Router();
const { USER_SETTINGS_MOCK } = require('../mocks/user');

router.get('/', async function (req, res) {
  try {
    return res.json({
      success: true,
      data: USER_SETTINGS_MOCK
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;