const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

module.exports = function( db ) {
    const urlencodedParser = bodyParser.urlencoded({ extended: false });

    router.post('/login', urlencodedParser, (req, res) => {
        const {email, password} = req.body;
        console.log(req.body);
    })
    return router;
}