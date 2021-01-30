const express = require('express');
const db = require('./db/index.js');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

const app = express();
app.use(cookieParser());
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// fix cross origin issue :/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
    }else {
       next();
    }
});

// pass db connection to require file
app.use('/register', require('./routes/register.js')(db));
app.use('/login', require('./routes/login.js')(db));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));