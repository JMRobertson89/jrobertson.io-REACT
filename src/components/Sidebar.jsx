import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
	return (
		<nav className="sidebar">
			<div className="top">
				<span>JR.</span>
			</div>
			<div className="middle">
				<Nav.Link as={Link} to="/" className="nav-item">
					<i className="bi bi-house-door-fill"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/about" className="nav-item">
					<i className="bi bi-person-fill"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/projects" className="nav-item">
					<i className="bi bi-file-code-fill"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/blog" className="nav-item">
					<i className="bi bi-book-fill"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/contact" className="nav-item">
					<i className="bi bi-envelope-fill"></i>
				</Nav.Link>
			</div>
			<div className="bottom">
				<a href="/files/Resume.pdf" target="_blank" className="nav-item">
					<i className="bi bi-file-arrow-down-fill"></i>
				</a>
				<a
					href="https://github.com/JMRobertson89"
					target="_blank"
					className="nav-item"
				>
					<i className="bi bi-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/jrobertson-io/"
					target="_blank"
					className="nav-item"
				>
					<i className="bi bi-linkedin"></i>
				</a>
			</div>
		</nav>
	);
}

export default Sidebar;
