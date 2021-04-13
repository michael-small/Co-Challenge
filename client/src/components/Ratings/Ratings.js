import { Typography } from '@material-ui/core';
import React from 'react';
import CreateRating from './CreateRating/CreateRating';

import Rating from './Rating/Rating';

export default function Ratings() {
	return (
		<div>
			<Typography variant='h4'>Ratings</Typography>
			{/* {ratings &&
				ratings.map((rating, index) => (
					<span></span>
				))} */}
			<Rating />
			<CreateRating />
		</div>
	);
}
