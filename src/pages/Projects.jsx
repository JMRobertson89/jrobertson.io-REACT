import projectsData from '../data/projectsData';
import './Projects.css';

function Projects() {
	return (
		<div className="projects-container">
			<h1>Projects</h1>
			<div className="projects">
				{projectsData.map((project) => (
					<div className="project-card" key={project.id}>
						<div className="project-info">
							<h4>{project.title}</h4>
							{/* <p>{project.description}</p> */}
						</div>
						<div className="project-image-container">
							<img src={project.image} alt={project.title} />
							<div className="project-overlay">
								<div className='project-description'>
									<p>{project.description}</p>
								</div>
								<div className="project-buttons">
									<a
										href={project.codeLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button>View Code</button>
									</a>
									<a
										href={project.appLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button>View App</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Projects;
