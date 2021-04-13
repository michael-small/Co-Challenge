import { Typography } from '@material-ui/core';
import React from 'react';

export default function Rating() {
	return (
		<div>
			<Typography variant='body1'>User: </Typography>
			<Typography variant='body1'>Rating: </Typography>
			{/* <div style={{ border: '1px solid red' }} key={index}>
				<p>User: {rating.user}</p>
				<p>Rating: {rating.rating}</p>
			</div> */}
		</div>
	);
}
