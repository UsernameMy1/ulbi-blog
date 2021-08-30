import React, {useState} from 'react';
import Input from './UI/input/Input'
import Button from './UI/button/Button'
const PostForm = ({create}) => {

	const [post, setPost] = useState({title: '', value: ''});

	const addNewPost = (e) => { 
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: '', value: ''})
	}

	return (
		<>
			<form className="col s12">
				<div className="row">
					<Input value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder={'Название поста'}/>
					<Input value={post.value} onChange={e => setPost({...post, value: e.target.value})} type="text" placeholder={'Описание поста'}/>
				</div>
				<button className="btn" onClick={addNewPost} >Создать пост</button>
			</form>
		</>
	);
};

export default PostForm;