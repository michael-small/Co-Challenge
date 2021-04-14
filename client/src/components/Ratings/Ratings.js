import { Typography } from '@material-ui/core';
import React from 'react';
import CreateRating from './CreateRating/CreateRating';

import Rating from './Rating/Rating';

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
	return (
		<div>
			<Typography variant='h4'>Ratings</Typography>
			<Grid
				container
				spacing={4}
				className={clsx('grid-container', classes.root)}
				style={{ marginBottom: '1rem' }}
			>
				{props.ratings &&
					props.ratings.map((rating, index) => (
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
								deleteRating={props.cockpitDeleteCallback}
							/>
						</Grid>
					))}
			</Grid>

			<CreateRating ratingCreated={props.cockpitCreateCallback} />
		</div>
	);
}
