import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
	return (
		<div className="sidebar d-flex flex-column p-3">
			<h2 className="logo">JR.</h2>
			<Nav>
				<Nav.Link as={Link} to="/" className="nav-item">
					<i className="bi bi-house-door"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/about" className="nav-item">
					<i className="bi bi-person"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/projects" className="nav-item">
					<i className="bi bi-file-code-fill"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/blog" className="nav-item">
					<i className="bi bi-book"></i>
				</Nav.Link>
				<Nav.Link as={Link} to="/contact" className="nav-item">
					<i className="bi bi-envelope"></i>
				</Nav.Link>
				<Nav.Link
					href="https://github.com/JMRobertson89"
					target="_blank"
					className="nav-item"
				>
					<i className="bi bi-github"></i>
				</Nav.Link>
				<Nav.Link
					href="https://www.linkedin.com/in/jrobertson-io/"
					target="_blank"
					className="nav-item"
				>
					<i className="bi bi-linkedin"></i>
				</Nav.Link>
			</Nav>
		</div>
	);
}

export default Sidebar;
