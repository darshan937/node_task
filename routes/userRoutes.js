const router = require('express').Router()
const usersControllers = require('../controllers/userControllers')

//Make or create user API
router.post('',usersControllers.createUser)

//controllers - Routes - (Index.js)

//Exporting
module.exports = router;