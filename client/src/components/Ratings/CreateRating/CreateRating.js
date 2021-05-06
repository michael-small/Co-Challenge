import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import envs from '../../../envs/envs';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

export default function CreateRating(props) {
	const classes = useStyles();
	const [rating, setRating] = useState('');
	const [reviewerName, setReviewerName] = useState('');

	async function saveRating(event) {
		event.preventDefault();

		const ratingData = {
			user: reviewerName,
			rating: rating,
		};

		try {
			await axios.post(`${envs}/ratings`, ratingData, {
				withCredentials: true,
			});
		} catch (error) {
			console.log(error);
		}

		props.ratingCreated();
	}

	return (
		<div>
			<Typography variant='h5'>Leave a Rating</Typography>
			<form
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
			</form>
		</div>
	);
}
