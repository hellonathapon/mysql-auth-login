const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    console.log(req.body)
    const {claimJwt} = req.body;
    const privateKey = process.env.JWT_PRIVATE_KEY;
    jwt.verify(claimJwt, privateKey, function(err, decoded){
        if(err) {
            return res.status(500).send('Unauthorized! :/')
        };
        console.log(decoded)
        res.status(200).send('Authorized! :)');
    })

})

module.exports = router;