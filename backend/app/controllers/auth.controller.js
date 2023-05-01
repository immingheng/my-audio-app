const db = require('../models')
const config = require('../config/auth.config')
const User = db.user;

const Op = db.sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    // Save user to database based on form in frontend
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8)
    }).then(user => {
        res.send({message: "User registered successfully!"})
    }).catch(err=>{
        res.status(500).send({message: err.message});
    });
};

exports.signin = (req, res) => {
    // Search for username in database
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user=>{
        // if user doesn't exist, throw a 404 (Not found) error indicating so
        if (!user) {
            return res.status(404).send({message: "User Not Found!"});
        }
        
        // Encrypt the input password and compare if they are the same
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        // if Password is invalid, return 401 error (unauthorized!) indicating invalid password
        if (!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        // JSON Web Token signed with userid and secret key in auth.config.js
        var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400 // (seconds) corresponding to 24 hours 
        });

        user.then(user=>{
            res.status(200).send({
                id: user.userid,
                username: user.username,
                email: user.email_address,
                accessToken: token
            });
        });

    }).catch(err=>{
        res.status(500).send({
            message: err.message
        });
    });
}