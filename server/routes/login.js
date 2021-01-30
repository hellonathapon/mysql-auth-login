const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function( db ) {
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    router.post('/', urlencodedParser, async (req, res) => {
        const {email, password} = req.body;
        try {
            db.query(' SELECT * FROM users WHERE email = ? ', [email], async (error, result) => {
                if(error) throw error;
                console.log(result)

                // check if there's no match with any emails in DB.
                if( !result.length ) {
                    console.log('no data with that email!')
                    return res.status(404).send('no data with that email!');
                }

                // # unhash password and compare to claim one
                if( !(await bcrypt.compare(password, result[0].password)) ) {
                    return res.status(500).json({ msg: 'Email or Password is incorrect!' })
                }

                // # generate JWT to store in localstorage or cookie
                const privateKey = process.env.JWT_PRIVATE_KEY;
                const payload = result[0].password;
                const token = jwt.sign({ payload },privateKey, { expiresIn: 60 * 60 })
                const cookieOptions = { expires: new Date(Date.now() + 900000),secure:false, httpOnly: true };
                
                res.cookie('jwt', token, cookieOptions);
                res.status(200).send('Successfully authenticated! :)');
            })

        } catch (error) {
            console.log(error)
        }
    })
    return router;
}