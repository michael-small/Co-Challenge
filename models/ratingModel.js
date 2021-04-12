const mongoose = require('mongoose');
// const oid = mongoose.Schema.Types.ObjectId;

const ratingSchema = new mongoose.Schema({
	user: { type: String },
	rating: { type: Number },
});

const Rating = mongoose.model('rating', ratingSchema);

module.exports = Rating;
