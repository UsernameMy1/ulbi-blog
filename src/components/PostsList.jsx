import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from './Post'

const PostsList = ({posts, title, remove}) => {
	if (!posts.length) {
		return(
			 <h2 className="center-align">Нет постов</h2>
		)
	}

	return (
		<div>
				<div>
					<h1 className="center-align">{title}</h1>
				</div>
				<TransitionGroup>
					{posts.map(post =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post" 
						>
						<Post remove={remove}  post={post} />
						</CSSTransition>
					)}
				</TransitionGroup>
		</div>
	);
};

export default PostsList;