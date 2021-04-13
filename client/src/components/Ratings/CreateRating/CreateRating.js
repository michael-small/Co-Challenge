import { Typography } from '@material-ui/core';
import React from 'react';

export default function CreateRating() {
	return (
		<div>
			<Typography variant='h5'>Leave a Rating</Typography>
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
						rating === '' || reviewerName === '' ? true : false
					}
				>
					Submit Rating
				</Button>
			</form> */}
		</div>
	);
}
