const {User} = require('../models')

class UserController {
    static findAll(req, res) {
        User
            .findAll()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static findOne(req, res) {
        User
            .findByPk(req.params.id)
            .then(user => {
                if(user) {
                    res.status(200).json(user)
                }
                else {
                    res.status(500).json({message: `User with ${id} not found`})
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static create(req, res) {
        User
            .create({
                username: req.body.username,
                password: req.body.password,
                age: req.body.age
            })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        User.findByPk(req.params.id)
        .then(user => {
            user.username = req.body.username
            user.password = req.body.password 
            user.age = req.body.age
            return user.save()
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static patch(req, res) {
        let user = {}
        User.findByPk(req.params.id)
        .then(user => {
            console.log(Object.keys(req.body))
            Object.keys(req.body).forEach( x => {
                user[x] = req.body[x]
            })
            return user.save()
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static delete(req, res) {
        User
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController