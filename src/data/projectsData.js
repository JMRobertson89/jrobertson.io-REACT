import socialNetworkImg from '../assets/images/SNAPI.png';
import curatedCratesImg from '../assets/images/curated-crates.png';
import randomIdeasImg from '../assets/images/random-ideas.png';
import employeeTrackerImg from '../assets/images/employee-tracker.png';

const projectsData = [
	{
		title: 'Social Network API',
		description:
			'Social network API created using Node.js, Express.js, using MongoDB',
		image: socialNetworkImg,
		codeLink: 'https://github.com/JMRobertson89/Social-Network-API',
		appLink: 'https://www.youtube.com/watch?v=7nFSZ9iiGTU',
	},
	{
		title: 'Curated Crates',
		description:
			'A subscription-based e-commerce website built collaboratively with React, Node.js, Material-UI and MongoDB',
		image: curatedCratesImg,
		codeLink: 'https://github.com/JMRobertson89/Curated-Crates',
		appLink: 'https://curated-crates.onrender.com/',
	},
	{
		title: 'Random Ideas',
		description:
			'A full-Stack application for sharing random ideas. Built with Express, Webpack, and MongoDB',
		image: randomIdeasImg,
		codeLink: 'https://github.com/JMRobertson89/Random-Ideas',
		appLink: 'https://random-ideas-api-zdkv.onrender.com/',
	},
	{
		title: 'Employee Tracker',
		description:
			'Command-line application to manage an employee database, using Node.js, Inquirer, and PostgreSQL',
		image: employeeTrackerImg,
		codeLink: 'https://github.com/JMRobertson89/Employee-Tracker',
		appLink: 'https://www.youtube.com/watch?v=Wh7yypVWQlQ',
	},
];

export default projectsData;
