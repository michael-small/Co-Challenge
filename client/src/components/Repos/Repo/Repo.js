import React from 'react';
import Card from '@material-ui/core/Card';
import './Repo.scss';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Repo(props) {
	return (
		<Card style={{ height: '100%' }} className={'card'}>
			<Typography variant='body1'>
				<a href={props.repo.html_url}>
					{props.repo.name} <GitHubIcon />
				</a>
			</Typography>
			{props.repo.description && <p>{props.repo.description}</p>}
		</Card>
	);
}
