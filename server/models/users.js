const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const util = require('util')
const userSchema = new mongoose.Schema({
	name: {
		type: 'String',
		required: true,
		trim: true,
		unique: true
	},
	password: {
		type: 'String',
		required: true,
		trim: true
	}
});

userSchema.pre('save', function (next) {
	const user = this

	console.log('[models]', util.inspect(user, false, null, true /* enable colors */))
	if (!user.isModified || !user.isNew) {// don't rehash if it's an old user
		console.log('dont rehash if its an old user');

		next();
	} else {
		bcrypt.hash(user.password, 10, (error, hash) => {
			if (error) {
				console.log('[models]', 'hash error', util.inspect(error, false, null, true /* enable colors */))
				return next(error);
			}
			user.password = hash;
			next();
		});

	}
});

module.exports = mongoose.model("User", userSchema);