const express = require('express')
const router = express.Router()
const db = require('../services/menu.service')
const cors = require('cors')

router.get('/all', cors(), db.getAllProducts)
router.get('/burgers', cors(), db.getProductsByCategory)

module.exports = router