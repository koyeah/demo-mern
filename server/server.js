require('dotenv').config();
const express = require('express');
const api = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const seedDB = require("./seed");
const methodOverride = require("method-override");

// const url = 'mongodb://dev:123abc@ds029911.mlab.com:29911/demo_article';
const url = 'mongodb://localhost/demo_article';
mongoose.connect(url, { useNewUrlParser: true });
api.use( bodyParser.urlencoded({ extended: true }));
api.use( bodyParser.json() );   
api.use(methodOverride("_method"));

//allow CORS
api.use(cors());

//routers
const articleRouter = require('./routes/article');
api.use('/api/articles', articleRouter);

const userRouter = require('./routes/users');
api.use(userRouter);

api.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has started!!!");
});

