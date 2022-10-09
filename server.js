const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const https = require("https")
const app = express();
const cors = require('cors')
const path = require("path");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

app.use(cors({ credentials: true }, { origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '5000mb', extended: true, parameterLimit: 100000000000 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
app.use('/', require('./routes/cards.route'))
https.createServer(app).listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})
