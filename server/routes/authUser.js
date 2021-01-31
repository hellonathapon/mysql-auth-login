const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    console.log('hit user endpoint')
})

module.exports = router;