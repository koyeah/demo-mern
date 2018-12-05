const express = require("express");
const router = express.Router();
const Article = require('../models/article');

//articles index
router.get('/', (req, res) => {
	console.log('------INDEX------');
	Article.find({})
		.then(articles => {
			console.log('SUCCESS', articles);
			res.json(articles);
		})
		.catch(error => {
			console.log('FAIL', error);
			return res.json({ error: error });
		})
});

//articles create
router.post('/', (req, res) => {
	console.log('------CREATE------');
	Article.create({ ...req.body.article })
		.then(article => {
			console.log('[articles create]', article);
			res.json(article);
		})
		.catch(err => {
			console.log('[articles create]', err);
			return res.json({ error: err });
		})
});

//articles show
router.get('/:id', (req, res) => {
	console.log('------SHOW------');
	Article.findById(req.params.id)
		.then(article => {
			console.log('[articles show]', article);
			res.json(article);
		})
		.catch(err => {
			console.log('[articles show]', err);
			return res.json({ error: err });
		})
});

//articles update
router.put('/:id', (req, res) => {
	console.log('------UPDATE------');
	Article.findByIdAndUpdate(req.params.id, req.body.article)
		.then(article => {
			console.log('[articles update]', 'success', article);
			res.json(article);
		})
		.catch(err => {
			console.log('[articles update]', 'ERR', err);
			return res.json({ error: err });
		})
});

//articles delete
router.delete('/:id', (req, res) => {
	console.log('------DELETE------');
	Article.findByIdAndRemove(req.params.id)
		.then(() => {
			console.log('[articles delete]', err);
			return res.json({ error: err });
		})
		.catch(err => {
			console.log('[articles delete]', err);
			return res.json({ error: err });
		})
});

module.exports = router;
