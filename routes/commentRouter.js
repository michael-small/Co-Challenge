const router = require('express').Router();
const Comment = require('../models/commentModel');

router.get('/', async (req, res) => {
	try {
		const comments = await Comment.find({});
		res.json(comments);
	} catch (error) {
		res.status(500).send();
	}
});

router.post('/', async (req, res) => {
	try {
		const { user, comment } = req.body;

		if (!comment) {
			return res.status(400).json({
				errorMessage: 'Please leave a comment',
			});
		}

		const newComment = new Comment({
			user,
			comment,
		});

		const savedComment = await newComment.save();

		res.json(savedComment);
	} catch (error) {
		res.status(500).send();
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const requestedCommentId = req.params.id;

		const savedComment = await Comment.findById(requestedCommentId);

		await savedComment.delete();

		res.json(savedComment);
	} catch (error) {
		res.status(500).send();
	}
});

module.exports = router;
