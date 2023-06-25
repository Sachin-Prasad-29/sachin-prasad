import { Project } from '../../Interface/ProjectInterface';

interface Props {
    project: Project;
}
const ProjectCard = ({ project }: Props) => {
    return (
        <div className="card">
            <div className="icon">
                <iframe
                    src={project.liveUrl}
                    scrolling="no"
                    title={project.title}
                ></iframe>
            </div>
            <h2>{project.title}</h2>
            <p>{project.desc} </p>
            <ul className="tech-stack">
                {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a
                className="link-tag"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github"></i>Repo-link
            </a>

            <a
                className="link-tag"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-external-link-alt"></i>
                Live-link
            </a>
        </div>
    );
};

export default ProjectCard;
