const express = require('express');
const router = express.Router();
const { getStatus, postContacto } = require('../controllers/apiController');

router.get('/status', getStatus);
router.post('/contacto', postContacto);

module.exports = router;