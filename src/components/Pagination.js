import React from "react";
import "./Pagination.css"; // Import the styles

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	// All the page numbers will be stored in here

	const pageNumbers = [];

	// This code calculates the total number of pages based on the total number of
	// posts and posts per page, then populates an array with the page numbers.

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="pagination-nav">
			<ul className="pagination-list">
				{pageNumbers.map((number) => (
					<li key={number} className="pagination-item">
						<a
							onClick={() => paginate(number)}
							href="!#"
							className="pagination-link"
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
