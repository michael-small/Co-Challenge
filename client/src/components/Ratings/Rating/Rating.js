import { Button, Typography } from '@material-ui/core';
import React from 'react';

import axios from 'axios';
import envs from '../../../envs/envs';

export default function Rating(props) {
	async function deleteRating() {
		await axios.delete(`${envs}/ratings/${props.id}`);
		props.deleteRating();
	}
	return (
		<div>
			<div style={{ margin: '2px' }}>
				<Typography variant='body1'>User: {props.user}</Typography>
				<Typography variant='body1'>Rating: {props.rating}</Typography>
				<Button onClick={deleteRating}>x</Button>
			</div>
		</div>
	);
}
