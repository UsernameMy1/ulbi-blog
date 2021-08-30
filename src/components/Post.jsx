import React from 'react';

const Post = ({post, remove}) => {
	return (
		<div>
			  <div className="row">
        <div className="col s12 m12">
          <div className="card  center-align">
            <span className="card-title">{post.title}</span>
            <div className="card-content">
              <p>{post.body}</p>
            </div>
            <div className="card-action">
              <button onClick={() => remove(post)} className="btn" href="#">Delete</button>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Post;