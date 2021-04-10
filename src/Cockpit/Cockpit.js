import React from 'react';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Cockpit.css';

export default function Cockpit() {
	return (
		<div className='App'>
			<Typography variant='h1'>CoChallenge</Typography>
			<div>
				<p id='about'>
					CoSchedule coding challenge to make a fullstack CRUD site{' '}
					<GitHubIcon />
				</p>
				<Typography variant='h3'>Requirements:</Typography>
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
