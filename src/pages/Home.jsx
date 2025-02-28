import { motion } from 'framer-motion';
import './Home.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/jrobertson-headshot2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const pageVariants = {
	hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function Home() {
	return (
		<div className="home-container">
			<motion.section
				className="home-content-left"
				initial="hidden"
				animate="visible"
				variants={pageVariants}
			>
				<div className="home-headers">
					<h1>Hi! I&apos;m Josh</h1>
					<h2>Full-Stack Software Developer</h2>
					<p>Lets create!</p>
				</div>
				<div className="contact-btn">
					<Nav.Link
						as={Link}
						to="/contact"
						className="nav-item"
						id="contact-btn"
					>
						<button type="button" className="btn btn-primary btn-lg">
							Contact Me
						</button>
					</Nav.Link>
				</div>
			</motion.section>
			<motion.section
				className="home-content-right"
				initial="hidden"
				animate="visible"
				variants={pageVariants}
			>
				<div className="headshot">
					<img src={headshot} alt="Josh Robertson headshot" />
				</div>
			</motion.section>
		</div>
	);
}
export default Home;
