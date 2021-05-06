module.exports = (req, res, next) => {
	//next is called when middleware is complete, indicates to pass req to next middleware in chain
	if (!req.user) {
		return res.status(401).send({ error: 'You must log in' });
	}

	next();
};
