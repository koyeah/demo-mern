const express = require("express");
const router = express.Router();
const Article = require('../models/article');

//articles index
router.get('/', (req, res) => {
    console.log('get article index');
    
    Article.find({}, (err, articles) => {
        if (err) {
            console.log('[articles index]', err);
            return res.json({ error: err });
        }
        console.log('[articles index]', articles);
        res.json(articles);
    });
});
// //articles new
// router.get('/articles/new', (req, res) => {

// });

//articles create
router.post('/', (req, res) => {
    console.log('POST' , req.body.article.title, req.body.article.content);
    
    Article.create({ ...req.body.article }, (err, article) => {
        if (err) {
            console.log('[articles create]', err);
            return res.json({ error: err });
        }
        console.log('[articles create]', article);
        res.json(article);
    });
});

//articles show
router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (err) {
            console.log('[articles show]', err);
            return res.json({ error: err });
        }
        console.log('[articles show]', article);
        res.json(article);
    });
});

//articles update
router.put('/:id', (req, res) => {
    console.log('[articles update]', "body body: " + req.body.article.title);
    Article.findByIdAndUpdate(req.params.id, req.body.article, (err, article) => {
        if (err) {
            console.log('[articles update]','ERR', err);
            return res.json({ error: err });
        }
        console.log('[articles update]', 'success', article);
        res.json(article);
    });
});

//articles delete
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, err => {
        if (err) {
            console.log('[articles delete]', err);
            return res.json({ error: err });
        }
        console.log('[articles delete]', Article);
        res.json(Article);
    });
});

module.exports = router;
