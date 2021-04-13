import { Typography } from '@material-ui/core';
import React from 'react';

export default function Rating(props) {
	return (
		<div>
			<div style={{ margin: '2px' }}>
				<Typography variant='body1'>User: {props.user}</Typography>
				<Typography variant='body1'>Rating: {props.rating}</Typography>
			</div>
		</div>
	);
}
