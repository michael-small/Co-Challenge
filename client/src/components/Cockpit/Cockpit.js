import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import envs from '../../envs/envs';

import './Cockpit.scss';
import '../UI/_theme.scss';

import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import Ratings from '../Ratings/Ratings';
import Repos from '../Repos/Repos';
import Comments from '../Comments/Comments';
import Login from '../Login/Login';

import UserContext from '../../Context';

export default function Cockpit() {
	const [myRepos, setMyRepos] = useState({ data: [] });
	const [ratings, setRatings] = useState([]);
	const user = useContext(UserContext);
	const [comments, setComments] = useState([]);

	const [myCommits, setMyCommits] = useState([]);

	useEffect(() => {
		getMyRepos();
		getMyCommits();
		getRatings();
		getComments();
		ratingCreated();
	}, []);

	async function getRatings() {
		const ratingsRes = await axios.get(`${envs}/ratings`);
		setRatings(ratingsRes.data);
	}

	async function getComments() {
		const commentsRes = await axios.get(`${envs}/comments`);
		setComments(commentsRes.data);
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

	async function commentDeleted() {
		getComments();
	}

	async function commentCreated() {
		getComments();
	}

	async function getMyCommits() {
		const myCommitsRes = await axios.get(`${envs}/api/repo_commits`);
		setMyCommits(myCommitsRes.data);
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
				<Login />
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
				<h4>Commits in my personal website repo looking for "css"</h4>
				<ul>
					{' '}
					{myCommits.map((commit, index) => (
						<li key={index}>
							{commit.commit.message.split('\n')[0]}
						</li>
					))}
				</ul>

				<Ratings
					ratings={ratings}
					cockpitCreateCallback={ratingCreated}
					cockpitDeleteCallback={ratingDeleted}
				/>
				<Comments
					comments={comments}
					cockpitDeleteCallback={commentDeleted}
					cockpitCreateCallback={commentCreated}
				/>
				<Typography variant='h4'>My Repos</Typography>
				<Repos repos={myRepos.data} />
			</div>
		</div>
	);
}
