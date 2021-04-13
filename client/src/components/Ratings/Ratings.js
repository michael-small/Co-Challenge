import { Typography } from '@material-ui/core';
import React from 'react';
import CreateRating from './CreateRating/CreateRating';

import Rating from './Rating/Rating';

export default function Ratings(props) {
	return (
		<div>
			<Typography variant='h4'>Ratings</Typography>
			{props.ratings &&
				props.ratings.map((rating, index) => (
					<Rating
						user={rating.user}
						rating={rating.rating}
						key={index}
						id={rating._id}
						deleteRating={props.cockpitDeleteCallback}
					/>
				))}
			<CreateRating ratingCreated={props.cockpitCreateCallback} />
		</div>
	);
}
