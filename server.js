const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const compression = require("compression")
const app = express();
const cors = require('cors')
const path = require("path");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const _environment  = process.env.ENVIRONMENT
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// ---- REDIRECT TO HTTPS ---- //
if (_environment === 'production') {
    app.enable('trust proxy');
    app.use(function (req, res, next) {
        if (req.secure) {
            // https request, nothing to handle
            next();
        } else {
            // this is an http request, redirect to https
            res.redirect(301, 'https://' + "spacejunkie.space");   
        }
    });
}
app.use(compression({ filter: shouldCompress }))
app.use(cors({ credentials: true }, { origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '5000mb', extended: true, parameterLimit: 100000000000 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
app.use('/', require('./routes/cards.route'))


app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})
