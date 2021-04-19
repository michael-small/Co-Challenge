const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	name: String,
	img: String,
});

const User = mongoose.model('user', userSchema);
module.exports = User;
