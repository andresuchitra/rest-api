const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    static findAll(req, res) {
        User
            .findAll()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(500).json({message: err})
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
                res.status(500).json({message: err})
            })
    }

    static create(req, res) {
        console.log('user create');
        User
            .create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, Number(process.env.SALT)),
                email: req.body.email,
                name: req.body.name,
                role: req.body.role
            })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json({message: err})
            })
    }

    static updatePatch(req, res) {
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
            res.status(500).json({message: err})
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
                res.status(500).json({message: err})
            })
    }

    static signin(req, res) {
        User.findOne({
            where: {username: req.body.username}
        })
        .then(user => {
            if(user) {
                //check password
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    //generate token
                    const token = jwt.sign({
                        username: user.username,
                        role: user.role,
                    }, process.env.JWT_SECRET)

                    res.status(200).json({
                        message: `Welcome, ${user.username}. You are logged in!`,
                        token: token
                    })
                }
                else {
                    res.status(401).json({message: 'Wrong password!'})
                }
            }
            else {
                res.status(401).json({message: 'User not recognized!'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
    }
}

module.exports = UserController