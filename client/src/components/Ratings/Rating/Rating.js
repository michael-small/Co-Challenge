import { Button, Typography } from '@material-ui/core';
import React from 'react';

import axios from 'axios';
import envs from '../../../envs/envs';

import './Rating.scss';
import Card from '@material-ui/core/Card';

export default function Rating(props) {
	async function deleteRating() {
		await axios.delete(`${envs}/ratings/${props.id}`);
		props.deleteRating();
	}
	return (
		<Card style={{ height: '100%' }} className={'card'}>
			<Typography variant='body1'>User: {props.user}</Typography>
			<Typography variant='body1'>Rating: {props.rating}</Typography>
			<Button onClick={deleteRating} variant='contained' size='small'>
				x
			</Button>
		</Card>
	);
}
