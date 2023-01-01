const express = require('express')
const router = express.Router();
const { generateImage } = require('../controllers/controller')

// generate image api 
router.post('/generate', generateImage)

module.exports = router