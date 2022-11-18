const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController.js');


router.post('/new', AuthController.register);

router.post('/login', AuthController.login);

router.get('/logout', AuthController.logout);


module.exports = router;