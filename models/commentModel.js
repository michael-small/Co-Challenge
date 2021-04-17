const mongoose = require('mongoose');
// const oid = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
	user: { type: String },
	comment: { type: Number },
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
