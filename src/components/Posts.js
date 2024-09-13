import "./Posts.css"; // Import CSS styles

function Posts({ posts, loading }) {
	if (loading) {
		return <h2>Loading...</h2>;
	}

	// Dynamically generated content

	return (
		<div className="posts-container">
			<h1 className="posts-header">Posts</h1>
			<ul className="posts-list">
				{posts.map((post) => (
					<li key={post.id} className="post-item">
						{post.id}. {post.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Posts;
