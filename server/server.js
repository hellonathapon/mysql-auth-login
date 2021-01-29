const express = require('express');
const db = require('./db/index.js');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// pass db connection to require file
app.use('/auth', require('./routes/index.js')(db));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));