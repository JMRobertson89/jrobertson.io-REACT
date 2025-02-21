import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../data/blogData.js';
import './BlogPost.css';

function BlogPost() {
	const { id } = useParams();
	const [content, setContent] = useState('');

	const post = blogPosts.find((p) => p.id === id);

	useEffect(() => {
		if (post) {
			fetch(`${window.location.origin}${post.file}`)
				.then((response) => response.text())
				.then((text) => setContent(text))
				.catch((error) =>
					console.error('There was an error loading this blog post', error)
				);
		}
	}, [post]);

	if (!post) {
		return <h2>No blog post was found</h2>;
	}

	return (
		<div className="blog-content">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
}

export default BlogPost;
