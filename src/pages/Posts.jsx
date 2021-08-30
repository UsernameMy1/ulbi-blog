import React, {useState, useEffect} from 'react';
import PostForm from './PostForm';
import PostsList from './PostsList';
import PostFilter from './PostFilter';
import { usePosts } from '../hooks/usePosts';
import Button from './UI/button/Button';
import PostService from './API/PostService';
import Preloader from './UI/preloader/Preloader';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './UI/pagination/Pagination';

const Posts = () => {
	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState({sort: '', query: ''})

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [isPostLoading, setIsPostLoading] = useState('false')

	const [totalPages, setTotalPages] = useState(0)

	const [limit, setLimit] = useState(10)

	const [page, setPage] = useState(1)


	const changePage = (page) => {
		setPage(page)
	}

	useEffect(() => {
		fetchPosts()
	}, [page])
 
	async function fetchPosts() {
		setIsPostLoading(true)
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		setIsPostLoading(false)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))

	}


	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<>
			<div className="content container">
				<Button onClick={fetchPosts} >response</Button>
				<PostForm create={createPost}/>
				<PostFilter filter={filter} setFilter={setFilter}/>
				{isPostLoading
					? <Preloader/>
					: <PostsList remove={removePost} title={'Посты про JS'} posts={sortedAndSearchedPosts} />

				}
				<Pagination page={page} changePage={changePage} totalPages={totalPages} />

			</div>
		</>
	);
};

export default Posts;