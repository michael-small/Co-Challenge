const router = require('express').Router();
const Rating = require('../models/ratingModel');
const requireLogin = require('../middlewares/requireLogin');

router.get('/', async (req, res) => {
	try {
		const ratings = await Rating.find({});
		res.json(ratings);
	} catch (error) {
		res.status(500).send();
	}
});

router.post('/', requireLogin, async (req, res) => {
	try {
		const { user, rating } = req.body;

		if (!rating) {
			return res.status(400).json({
				errorMessage: 'Please leave a rating',
			});
		}

		const newRating = new Rating({
			user,
			rating,
		});

		const savedRating = await newRating.save();

		res.json(savedRating);
	} catch (error) {
		res.status(500).send();
	}
});

router.delete('/:id', requireLogin, async (req, res) => {
	try {
		const requestedRatingId = req.params.id;

		const savedRating = await Rating.findById(requestedRatingId);

		await savedRating.delete();

		res.json(savedRating);
	} catch (error) {
		res.status(500).send();
	}
});

module.exports = router;
