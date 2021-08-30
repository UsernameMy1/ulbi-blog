import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<div>
			{pagesArray.map(p =>
				<button className="btn" onClick={() => changePage(p)} key={p}>{p}</button>
			)}
		</div>
	);
};

export default Pagination;