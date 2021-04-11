import React, { useState, useEffect } from 'react';
import axios from 'axios';
import envs from '../../envs/envs';

import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../UI/_theme.scss';

import './Cockpit.scss';

export default function Cockpit() {
	const [helloWorld, setHelloWorld] = useState();

	useEffect(() => {
		getHelloWorld();
	}, []);

	async function getHelloWorld() {
		console.log('API env: ' + `${envs}/helloworld/`);
		const helloWorldRes = await axios.get(`${envs}/helloworld/`);

		setHelloWorld(helloWorldRes.data);
		console.log('res data: ' + helloWorldRes.data);
	}

	return (
		<div>
			<div style={{ border: '1px solid red' }}>{helloWorld}</div>
			<Typography variant='h1' className='center-text'>
				CoChallenge
			</Typography>
			<div>
				<p className='center-text'>
					CoSchedule coding challenge to make a fullstack CRUD site{' '}
					<GitHubIcon />
				</p>
				<Typography variant='h3' className='center-text'>
					Requirements:
				</Typography>
				<ul>
					<li>Pick a pre-approved API </li>
					<li>
						Backend: Create API for CRUD, include comment system
					</li>
					<li>
						Frontend: Search data source, user can rate an item
						source, user can rate an item
					</li>
					<li>e2e auth as a bonus</li>
				</ul>
			</div>
		</div>
	);
}
