const route = require('express').Router()
const UserController = require('../controllers/users')

route.get('/', UserController.findAll)
route.get('/:id', UserController.findOne)
route.post('/', UserController.create)
route.put('/:id', UserController.update)
route.patch('/:id', UserController.patch)
route.delete('/:id', UserController.delete)

module.exports = route