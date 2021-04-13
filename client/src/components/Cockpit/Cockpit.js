import React, { useState, useEffect } from 'react';
import axios from 'axios';
import envs from '../../envs/envs';

import './Cockpit.scss';
import '../UI/_theme.scss';

import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import Ratings from '../Ratings/Ratings';

export default function Cockpit() {
	const [myRepos, setMyRepos] = useState({ data: [] });
	const [ratings, setRatings] = useState([]);

	useEffect(() => {
		getMyRepos();
		getRatings();
		ratingCreated();
	}, []);

	async function getRatings() {
		const ratingsRes = await axios.get(`${envs}/ratings`);
		setRatings(ratingsRes.data);
	}

	async function getMyRepos() {
		const myReposRes = await axios.get(`${envs}/api/my_repos`);
		setMyRepos(myReposRes.data);
	}

	async function ratingCreated() {
		getRatings();
	}

	async function ratingDeleted() {
		getRatings();
	}

	return (
		<div>
			<Typography variant='h2' className='center-text'>
				Co-Challenge
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
				<Ratings
					ratings={ratings}
					cockpitCreateCallback={ratingCreated}
					cockpitDeleteCallback={ratingDeleted}
				/>
				<Typography variant='h4'>My Repos</Typography>
				<ul>
					{myRepos &&
						myRepos.data.map((repo, index) => (
							<li key={index}>
								<div>
									<a href={repo.html_url}>{repo.name}</a>
									{repo.description && (
										<p>{repo.description}</p>
									)}
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
