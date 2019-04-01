const route = require('express').Router()
const UserRoute = require('./users')
const UserController = require('../controllers/users')

//routing to specific UserController. SIGNUP allow creation by external user (no TOKEN needed)
route.post('/signup', UserController.create)
route.post('/signin', UserController.signin)
//pass user route accordingly
route.use('/users', UserRoute)

module.exports = route