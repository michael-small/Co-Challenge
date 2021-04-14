const express = require('express');
const app = express();
app.use(express.json());

const keys = require('./config/keys');

const mongoose = require('mongoose');

const { Octokit } = require('@octokit/core');
const octokit = new Octokit();

// CORs for dev and prod
const cors = require('cors');
app.use(
	cors({
		origin: [
			'http://localhost:3000',
			'https://co-challenge.herokuapp.com/',
		],
		credentials: true,
	})
);

// Handles how React proxies with Express to point the output in the view to the
// client's build. Neccisary for prod to recognize the `index.html` file to inject
// the root selector
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.get('/api/my_repos', async (req, res) => {
	try {
		// 27 per query is a bit arbitrary but it allows for seeing
		// my 3601 iter3 and DBs final project
		const repos = await octokit.request(
			'GET /users/michael-small/repos?per_page=27&sort=pushed'
		);
		res.send(repos);
		console.log(repos);
	} catch (error) {
		res.status(500).send();
	}
});

app.use('/ratings', require('./routes/ratingRouter'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);

mongoose.connect(
	keys.mongoURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) return console.error(err);
		console.log('Connected to MongoDB');
	}
);
