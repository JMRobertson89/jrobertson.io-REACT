import projectsData from '../data/projectsData';
import './Projects.css';

function Projects() {
	return (
		<div className="projects-container">
			<h1>Projects</h1>
			<div className='projects'>
				{projectsData.map((project) => (
					<div className='project-card' key={project.id}>
						<div className='project-image'>
							<img src={project.image} alt={project.title} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Projects;
