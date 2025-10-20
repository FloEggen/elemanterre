const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const objectController = require('./controllers/objectController')
router.get('/', userController.home)
router.get('/society', userController.society)
router.get('/repair-coffee', userController.repairCoffee)
router.post('/rc-object-registration', objectController.registerObject)
module.exports = router