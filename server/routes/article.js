const express = require("express");
const router = express.Router();
const Article = require('../models/article');

//articles index
router.get('/', async (req, res) => {
	console.log('------INDEX------');
	try {
		const articles = await Article.find({})
		console.log('SUCCESS', articles);
		res.json(articles);
	} catch (error) {
		console.log('FAIL', error);
		return res.json({ error: error });
	}
});

//articles create
router.post('/', async (req, res) => {
	console.log('------CREATE------');
	try {
		const article = await Article.create({ ...req.body.article })
		console.log('[articles create]', article);
		res.json(article);
	} catch (error) {
		console.log('[articles create]', error);
		return res.json({ error: error });
	}
});

//articles show
router.get('/:id', async (req, res) => {
	console.log('------SHOW------');
	try {
		const article = await Article.findById(req.params.id)
		console.log('[articles show]', article);
		res.json(article);
	} catch (error) {
		console.log('[articles show]', error);
		return res.json({ error: error });
	}
});

//articles update
router.put('/:id', async (req, res) => {
	console.log('------UPDATE------');
	try {
		const article =
			await Article.findByIdAndUpdate(req.params.id, req.body.article)
		res.json(article);
	} catch (error) {
		return res.json({ error: error });
	}
});

//articles delete
router.delete('/:id', async (req, res) => {
	console.log('------DELETE------');
	try {
		await Article.findByIdAndRemove(req.params.id)
		return res.json({});
	} catch (error) {
		console.log('[articles delete]', error);
		return res.json({ error: error });
	}
});

module.exports = router;
