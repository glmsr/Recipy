const express = require('express');
const router = express.Router();
const recipe = require('../models/recipeModel');
const recipeController = require('../controllers/recipeController');
const upload = require('../middleware/upload');
const authenticate = require('../middleware/authenticate');


router.get('/', authenticate, recipeController.index);

router.get('/:id', authenticate, recipeController.show);

router.post('/new', authenticate, upload.single('image'), recipeController.store);

router.put('/update', authenticate, recipeController.update);

router.delete('/delete/:id', authenticate, recipeController.erase);

module.exports = router;


