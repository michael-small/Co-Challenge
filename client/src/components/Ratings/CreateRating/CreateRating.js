import { Typography } from '@material-ui/core';
import React from 'react';

export default function CreateRating() {
	return (
		<div>
			<Typography variant='h6'>Leave a Rating</Typography>
			<div>
				<form>
					<input type='text' />
					<input type='number' />
				</form>
				<button>Submit Rating</button>
			</div>
		</div>
	);
}
