import projects from "../data.js";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects-body">
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <div className='project-infos'>
            <div className='project-detail'>
              <img className='project-img' src={project.img} alt={project.name} />
              <h3>{project.name}</h3>
              <a href={project.repo} target='_blank' rel="noreferrer" alt='Repo Github'><div className='project-button'>Repo Github</div></a>
            </div>
              <ul className='project-techno'>
                {project.techno.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
          </div>
          <div>
            <p className='project-desc'>{project.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
