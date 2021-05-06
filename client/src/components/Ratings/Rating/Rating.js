import { Button, Typography } from '@material-ui/core';
import React from 'react';

import axios from 'axios';
import envs from '../../../envs/envs';

import './Rating.scss';
import Card from '@material-ui/core/Card';
import MUIRating from '@material-ui/lab/Rating';

export default function Rating(props) {
	async function deleteRating() {
		await axios.delete(`${envs}/ratings/${props.id}`, {
			withCredentials: true,
		});
		props.deleteRating();
	}
	return (
		<Card style={{ height: '100%' }} className={'card'}>
			<Typography variant='body1'>User: {props.user}</Typography>
			<MUIRating readOnly value={props.rating} />
			<div>
				<Button onClick={deleteRating} variant='contained' size='small'>
					x
				</Button>
			</div>
		</Card>
	);
}
