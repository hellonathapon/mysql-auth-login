const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

module.exports = function( db ) {
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    router.post('/login', urlencodedParser, async (req, res) => {
        const {email, password} = req.body;
        try {
            db.query(' SELECT * FROM users WHERE email = ? ', [email], async (error, result) => {
                if(error) throw error;
                console.log(result)

                // if there's no match with any emails in DB.
                if( !result.length ) {
                    console.log('no data with that email!')
                    return res.status(404).send();
                }
                res.status(200).send();

                // # unhash password and compare to claim one
                // # generate JWT to store in localstorage or cookie

            })

        } catch (error) {
            console.log(error)
        }
    })
    return router;
}