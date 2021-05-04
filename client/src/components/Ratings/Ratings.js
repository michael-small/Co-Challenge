import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import CreateRating from './CreateRating/CreateRating';

import Rating from './Rating/Rating';
import envs from '../../envs/envs';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
}));

export default function Ratings(props) {
	const classes = useStyles();

	const [ratings, setRatings] = useState([]);

	useEffect(() => {
		getRatings();
		ratingCreated();
	}, []);

	async function getRatings() {
		const ratingsRes = await axios.get(`${envs}/ratings`);
		setRatings(ratingsRes.data);
	}

	async function ratingCreated() {
		getRatings();
	}

	async function ratingDeleted() {
		getRatings();
	}

	return (
		<div>
			<Typography variant='h4'>Ratings</Typography>
			<Grid
				container
				spacing={4}
				className={clsx('grid-container', classes.root)}
				style={{ marginBottom: '1rem' }}
			>
				{ratings &&
					ratings.map((rating, index) => (
						<Grid
							item
							xs={12}
							sm={4}
							md={4}
							lg={3}
							key={index}
							align='center'
						>
							<Rating
								user={rating.user}
								rating={rating.rating}
								key={index}
								id={rating._id}
								deleteRating={ratingDeleted}
							/>
						</Grid>
					))}
			</Grid>

			<CreateRating ratingCreated={ratingCreated} />
		</div>
	);
}
