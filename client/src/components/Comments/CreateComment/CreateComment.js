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

export default function CreateComment(props) {
	const classes = useStyles();
	const [comment, setComment] = useState('');
	const [commenterName, setCommenterName] = useState('');

	async function saveComment(event) {
		event.preventDefault();

		const commentData = {
			user: commenterName,
			comment: comment,
		};

		try {
			await axios.post(`${envs}/comments`, commentData);
		} catch (error) {
			console.log(error);
		}

		props.commentCreated();
	}

	return (
		<div>
			<Typography variant='h5'>Leave a Comment</Typography>
			<form
				className={classes.root}
				autoComplete='off'
				onSubmit={saveComment}
			>
				<TextField
					label='Name'
					type='text'
					value={commenterName}
					onChange={(e) => setCommenterName(e.target.value)}
					error={commenterName === '' ? true : false}
					helperText='Name required'
				/>
				<TextField
					label='Comment'
					type='text'
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					error={comment === '' ? true : false}
					helperText='Comment required'
				/>
				<Button
					variant='contained'
					type='submit'
					disabled={
						comment === '' || commenterName === '' ? true : false
					}
				>
					Submit Comment
				</Button>
			</form>
		</div>
	);
}
