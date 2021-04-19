import { Typography } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import envs from '../../../envs/envs';

import UserContext from '../../../Context';

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
	const user = useContext(UserContext);

	const [comment, setComment] = useState('');

	async function saveComment(event) {
		event.preventDefault();

		const commentData = {
			user: user.name,
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
					disabled={comment === '' ? true : false}
				>
					Submit Comment
				</Button>
			</form>
		</div>
	);
}
