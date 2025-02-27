import { Link } from 'react-router-dom';
import blogPosts from '../data/blogData';
import './Blog.css';

function Blog() {
	return (
		<div className="blog-container">
			<h1>My Blog</h1>
			<div className="blogs">
				{blogPosts.slice().reverse().map((post) => (
					<div className="blog-card" key={post.id}>
						<h2>{post.title}</h2>
						<p>
							<strong>Published on {post.date}</strong>
						</p>
						<Link to={`/blog/${post.id}`}>Read this blog</Link>
					</div>
				))}
			</div>
		</div>
	);
}
export default Blog;
