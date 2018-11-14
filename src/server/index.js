const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
const port =  process.env.PORT || 3000;
const routers = require('./modules/Root/composeRouter');
const preloader = require('./modules/Preloader');


// Use morgan to log request in dev mode

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(cors());
app.use(routers);
app.get('/', (req, res, next)=> {
    res.send(`<div>Hello. I am a server to fetch API! (^O^)`)
})
preloader.initApp();


app.listen(port, () => console.log('Server start at port ', port));