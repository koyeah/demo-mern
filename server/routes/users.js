
const express = require("express");
const router = express.Router();
const User = require('../models/users');
const util = require('util')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/api/v1/users', async (req, res) => {
	let result = {};
	let status = 201;
	const { name, password } = req.body;

	const user = new User({ name, password })
	try {
		result = await user.save();
		result.status = 201;
		result.result = user;
	} catch (error) {
		status = 500;
		result.status = status;
		result.error = error;
	}
	res.status(status).send(result);
});
router.post('/api/v1/login', async (req, res) => {

	let result = {};
	let status = 200;
	const { name, password } = req.body;
	try {
		const user = await User.findOne({ name })
		try {
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				status = 401;
				result.status = status;
				result.error = 'Authentication error';
			} else {
				const payload = { user: user.name };
                const options = { expiresIn: '2d' };
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, options);

                // console.log('TOKEN', token);
                result.token = token;
                result.status = status;
                result.result = user;
				result.status = status;
				result.result = user;
			}
		}
		catch (error) {
			status = 500;
			result.status = status;
			result.error = error;
			console.log('[Error]', util.inspect(error));

		}
	}
	catch (error) {
		status = 404;
		result.status = status;
		result.error = error;
		console.log('[Error]', util.inspect(error));
	}

	res.status(status).send(result);
});


module.exports = router;