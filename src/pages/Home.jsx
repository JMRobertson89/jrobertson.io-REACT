import './Home.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/jrobertson-headshot2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
	return (
		<div className='home-container'>
			<section className='home-content-left'>
				<div className='home-headers'>
					<h1>Hi! I&apos;m Josh</h1>
					<h2>Full-Stack Software Developer</h2>
					<p>Lets create!</p>
				</div>
				<div className='contact-btn'>
					<Nav.Link as={Link} to="/contact" className="nav-item" id='contact-btn'>
					<button type="button" className="btn btn-primary btn-lg">Contact Me</button>
					</Nav.Link>
				</div>
			</section>
			<section className='home-content-right'>
				<div className='headshot'>
					<img src={headshot} alt='Josh Robertson headshot' />
				</div>
			</section>
		</div>
	);
}
export default Home;