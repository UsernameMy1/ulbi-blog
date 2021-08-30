import React from 'react';
import Select from './UI/select/Select';
import Input from './UI/input/Input'

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<Input
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder="Поиск"
				/>
				<Select
					value={filter.sort}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
					defaultValue="Сортировка"
					options={[
						{name: 'title', desc: 'По названию'},
						{name: 'body', desc: 'По описанию'},
					]}
				/>
		</div>
	);
};

export default PostFilter;