// express
const express = require('express');
const router = express.Router();
// bcrypt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// model
const User = require('../models/user')
const { register } = require('../controllers/auth')



router
    .route('/register')
    .post(register)


/**
 * Register
 */
//router.post('/register', (req, res) => {
// User.findOne({ email: req.body.email }, (error, user) => {
//     if (error) {
//         return res.status(400).json({
//             error: true,
//             message: error.message
//         })
//     }
//     if (user) {
//         res.status(400).json({
//             error: true,
//             message: "email already registered"
//         })
//     } else {
//         const newUser = new User(req.body);
//         newUser.save(function (error, docs) {
//             if (error) {
//                 res.status(400).json({
//                     error: true,
//                     message: error.message
//                 })
//             } else {
//                 res.status(201).json({
//                     error: false,
//                     message: 'user registers successfully',
//                     user: docs
//                 });
//             }
//         });
//     }
// })

//});

/**
 * Login
 */
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (error, docs) => {
        if (error) {
            return res.status(400).json({
                error: true,
                message: error.message
            });
        }
        if (!docs) {
            return res.status(400).json({
                error: true,
                message: 'email does not exist'
            });
        } else {
            bcrypt.compare(req.body.password, docs.password, (error, response) => {
                if (error) {
                    res.status(400).json({
                        error: true,
                        message: error.message
                    })
                }
                if (response) {
                    jwt.sign({ user: docs }, 'secretkey', (err, token) => {
                        if (err) {
                            res.status(400).json({
                                error: false,
                                message: err.message
                            })
                        } else {
                            return res.json({
                                token: token,
                                user: docs
                            })
                        }

                    });
                } else {
                    res.status(400).json({
                        error: true,
                        message: 'password do not match'
                    })
                }
            });
        }
    });
})

router.post('/test', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if (error) {
            res.status(403).json({
                error: true,
                message: error.message
            });
        } else {
            res.json({
                message: 'hi from test',
                authData
            })
        }
    });
})

function verifyToken(req, res, next) {
    // Get Auth header value
    const bearerHeader = req.headers.authorization;
    //const bearerHeader = req.headers['authorization']
    // check if bearer is undefine
    if (typeof bearerHeader !== 'undefined') {
        // split at the space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        req.token = bearerToken;
        // next middleware
        next();
    } else {
        // forbidden
        res.sendStatus(403);
    }
}


module.exports = router;