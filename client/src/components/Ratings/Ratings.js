import { Typography } from '@material-ui/core';
import React from 'react';

import Rating from './Rating/Rating';

export default function Ratings() {
	return (
		<div>
			<Typography variant='h4'>Ratings</Typography>
			{/* TODO: Convert to `Create Rating` */}
			<Rating />
			{/* TODO: Convert to `Rating` */}
			<div>
				<form>
					<input type='text' />
					<input type='number' />
				</form>
				<button>Submit Rating</button>
			</div>

			{/* <form
					className={classes.root}
					autoComplete='off'
					onSubmit={saveRating}
				>
					<TextField
						label='Name'
						type='text'
						value={reviewerName}
						onChange={(e) => setReviewerName(e.target.value)}
						error={reviewerName === '' ? true : false}
						helperText='Name required'
					/>
					<TextField
						label='Rating'
						type='number'
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						error={rating === '' ? true : false}
						helperText='Rating required'
					/>
					<Button
						variant='contained'
						type='submit'
						disabled={
							rating === '' || reviewerName === ''
								? true
								: false
						}
					>
						Submit Rating
					</Button>
				</form>
				{ratings &&
					ratings.map((rating, index) => (
						<div style={{ border: '1px solid red' }} key={index}>
							<p>User: {rating.user}</p>
							<p>Rating: {rating.rating}</p>
						</div>
					))} */}
		</div>
	);
}
