import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);

	// Fetching the data

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);

			try {
				const res = await axios.get(
					"https://jsonplaceholder.typicode.com/posts"
				);
				setPosts(res.data);
				setLoading(false);
			} catch (err) {
				console.err(err.message);
			}
		};

		fetchPosts();
	}, []);

	// Default approach

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change the Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div>
			<Posts posts={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
