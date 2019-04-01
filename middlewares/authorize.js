const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authorize: function(req, res, next) {
        //check the password
        try {
            const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            console.log(decoded);
            
            if(decoded.role === 'admin') {
                next()
            }
            else {
                res.status(403).json({
                    message: 'Forbidden'
                })
            }
        }
        catch(err) {
            res.status(401).json({
                message: err
            })
        }
    }
}