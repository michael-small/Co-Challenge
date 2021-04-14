import React from 'react';
import Repo from './Repo/Repo';

export default function Repos(props) {
	return (
		<div>
			{props.repos.map((repo, index) => (
				<ul key={index}>
					<Repo repo={repo} />
				</ul>
			))}
		</div>
	);
}
