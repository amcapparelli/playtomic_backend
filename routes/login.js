const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
const { USER_CREDENTIALS_MOCK, MOCK_USER } = require('../mocks/user');

router.post('/', async function (req, res) {
  try {
    const { email, password } = req.body;
    if (USER_CREDENTIALS_MOCK.email === email && USER_CREDENTIALS_MOCK.password === password) {
      jwt.sign(
        { user: MOCK_USER },
        'lalocuranuncatuvomaestro',
        { expiresIn: '1d' },
        (err, token) => {
          if (err) {
            res.json({ message: 'something went wrong' });
            return;
          }
          res.json({
            message: 'usuario logueado correctamente',
            success: true,
            user: { ...MOCK_USER, token },
          });
        });
      return;
    }
    return res.json({ success: false, message: 'No existe un usuario con ese email' });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;