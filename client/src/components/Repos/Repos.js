import React, { useState, useEffect } from 'react';
import envs from '../../envs/envs';
import axios from 'axios';
import Repo from './Repo/Repo';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
}));

export default function Repos(props) {
	const classes = useStyles();
	const [myRepos, setMyRepos] = useState({ data: [] });

	useEffect(() => {
		getMyRepos();
	}, []);

	async function getMyRepos() {
		const myReposRes = await axios.get(`${envs}/api/my_repos`);
		setMyRepos(myReposRes.data);
	}

	return (
		<Grid
			container
			spacing={4}
			className={clsx('grid-container', classes.root)}
			style={{ marginBottom: '1rem' }}
		>
			{myRepos.data.map((repo, index) => (
				<Grid
					item
					key={index}
					xs={12}
					sm={4}
					md={4}
					lg={3}
					align='center'
				>
					<Repo repo={repo} />
				</Grid>
			))}
		</Grid>
	);
}
