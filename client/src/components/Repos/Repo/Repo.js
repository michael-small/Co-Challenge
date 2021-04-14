import React from 'react';

export default function Repo(props) {
	return (
		<li>
			<div>
				<a href={props.repo.html_url}>{props.repo.name}</a>
				{props.repo.description && <p>{props.repo.description}</p>}
			</div>
		</li>
	);
}
