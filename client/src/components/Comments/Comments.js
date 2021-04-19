import React from 'react';

import Comment from './Comment/Comment';
import CreateComment from './CreateComment/CreateComment';

export default function Comments(props) {
	// TODO: Use for alt tag on Avatar
	return (
		<span>
			<div>
				<h1>Comments</h1>
				{props.comments.map((comment, index) => (
					<Comment
						deleteComment={props.cockpitDeleteCallback}
						id={comment._id}
						key={index}
						user={comment.user}
						comment={comment.comment}
					/>
				))}
			</div>
			<CreateComment commentCreated={props.cockpitCreateCallback} />
		</span>
	);
}
