const route = require('express').Router()
const UserController = require('../controllers/users')
const {authenticate}= require('../middlewares/authenticate')
const {authorize} = require('../middlewares/authorize')

route.get('/', authorize, authenticate, UserController.findAll)
route.get('/:id', authenticate, UserController.findOne)
route.post('/', authorize, authenticate, UserController.create)
route.put('/:id', authenticate, UserController.updatePatch)
route.patch('/:id', authenticate, UserController.updatePatch)
route.delete('/:id', authorize, authenticate, UserController.delete)

//signin & singup

module.exports = route