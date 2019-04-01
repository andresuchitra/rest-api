const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authenticate: function(req, res, next) {
        //check the password
        try {
            const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            //check if correct user
            if(decoded) {
                if(req.params.id) {
                    User.findByPk(req.params.id)
                    .then(user => {
                        if(user.username === decoded.username || (decoded.role === 'admin')) {
                            next()
                        }
                        else {
                            res.status(401).json({
                                message: `You cant access user ID ${user.id}`
                            })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: err
                        })
                    })
                }
                else {
                    next()
                }
            }
        }
        catch(err) {
            res.status(401).json({
                message: err
            })
        }
    }
}