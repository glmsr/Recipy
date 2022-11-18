const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticate = (req, res, next) => {
    const token = req.cookies.jwt;
    
    if (token) {
        jwt.verify(token, 'secretData', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(401).json({ error: 'Unauthorized request' });
            } else {
                let user = User.findById(decodedToken.id);
                next();
            }
        })
    } else {
        res.status(401).json({error: 'Unauthorized request'});
    }
    
}

module.exports = authenticate;


