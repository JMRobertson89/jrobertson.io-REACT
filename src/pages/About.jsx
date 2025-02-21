import { Link } from 'react-router-dom';
import './About.css';
import javascript from '../assets/tech-logos/javascript.webp';
import react from '../assets/tech-logos/react.webp';
import node from '../assets/tech-logos/node.webp';
import python from '../assets/tech-logos/python.png';
import django from '../assets/tech-logos/django.png';
import database from '../assets/tech-logos/sql.png';
import git from '../assets/tech-logos/git.png';
import mongo from '../assets/tech-logos/mongo.png';
import postgres from '../assets/tech-logos/postgres.png';
import express from '../assets/tech-logos/express.png';


function About() {
	return (
		<div className="about-container">
			<section className="about-me-section">
				<h1>About Me</h1>
				<p>
					I’m a Full-Stack Software Developer with a passion for creating
					innovative solutions that bridge technology with business needs. A
					graduate of the University of Connecticut&apos;s Full-Stack Web
					Development Bootcamp, I&apos;ve developed expertise in both front-end
					and back-end development technologies. Leveraging my additional
					background in technology sales and client management, I bring a
					distinctive blend of technical proficiency, customer-focused
					problem-solving, and collaborative teamwork to every project. My
					strengths include crafting user-friendly applications, driving
					creative solutions, and tackling complex challenges with precision.
				</p>
				<p>
					I’m driven to turn ideas into impactful software solutions and am
					always looking for opportunities to collaborate, innovate, and grow.
					Let’s connect and create something amazing together!
				</p>
				<p>
					Check out my <Link to="/blog"> blog</Link> to follow my coding
					journey.
				</p>
			</section>
			<section className="skills-section">
				<h1>Skills</h1>
				<div className='skills-cells'>
					<div className='cell'>
						<img src={javascript} alt="javascript logo" />
						<span>JavaScript</span>
					</div>
					<div className='cell'>
						<img src={react} alt="react logo" />
						<span>React</span>
					</div>
					<div className='cell'>
						<img src={node} alt="node.js logo" />
						<span>Node.js</span>
					</div>
					<div className='cell'>
						<img src={express} alt="express logo" />
						<span>Express</span>
					</div>
					<div className='cell'>
						<img src={python} alt="python logo" />
						<span>Python</span>
					</div>
					<div className='cell'>
						<img src={django} alt="django logo" />
						<span>Django</span>
					</div>
					<div className='cell'>
						<img src={database} alt="database logo" />
						<span>SQL & NoSQL</span>
					</div>
					<div className='cell'>
						<img src={postgres} alt="postgreSQL logo" />
						<span>PostgreSQL</span>
					</div>
					<div className='cell'>
						<img src={mongo} alt="mongoDB logo" />
						<span>MongoDB</span>
					</div>
					<div className='cell'>
						<img src={git} alt="git logo" />
						<span>Git</span>
					</div>
				</div>
			</section>
		</div>
	);
}
export default About;
