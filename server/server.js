const express = require('express');
const api = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const seedDB = require("./seed");
const methodOverride = require("method-override");
require('dotenv').config();



const url = 'mongodb://dev:123abc@ds029911.mlab.com:29911/demo_article';
// const url = "mongodb://localhost/demo_articles";
mongoose.connect(url, { useNewUrlParser: true });
api.use( bodyParser.urlencoded({ extended: true }));
api.use( bodyParser.json() );   
api.use(methodOverride("_method"));

api.use( (req, res, next)  => {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://demoweb.ap-southeast-1.elasticbeanstalk.com');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//routers
const articleRouter = require('./routes/article');
api.use('/api/articles', articleRouter);


// api.listen(process.env.PORT, process.env.IP, () => {
api.listen(1234, "localhost", () => {
    console.log("Server has started!!!");
});

