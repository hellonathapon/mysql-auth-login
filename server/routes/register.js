const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

module.exports = function(db) {
    const urlencodedParser = bodyParser.urlencoded({extended: false});
    
    router.post('/', urlencodedParser, (req, res) => {
        const {firstName, lastName, age, email, password, confirmPassword} = req.body;
        console.log(firstName);
        
        // check if confirm password doesn't match 
        if(password !== confirmPassword) {
            return res.status(401).json({message: 'Password not match!'});
        }

        try {
            db.query(' SELECT * FROM users WHERE email = ? ', [email], async (err, result) => {
                if(err) throw err;

                // check if there's an existing email in DB.
                if( result.length >= 1 ) {
                    console.log('that email is in used try to login instead!')
                    return res.status(409).send();
                }
                // hash the password and store in DB.
                bcrypt.hash(password, 10, (err, hashPassword) => {
                    if(err) throw err;
                    db.query(' INSERT INTO users SET ? ', 
                    {
                        firstname: firstName,
                        lastname: lastName,
                        age: age,
                        email: email,
                        password: hashPassword,
                    }, (err, result) => {
                        if(err) throw err;
                        console.log(result);
                        res.status(201).send();
                    })
                })
            })
        }catch(err) {
            console.error(err);
            return  res.send(err);
        }
    });
    return router;
}