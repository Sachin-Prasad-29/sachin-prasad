import React from 'react';
import projects from '../data/projects';
import { githubUrl } from '../data/urls';

const ProjectSection = () => {
    return (
        <section id="work">
            <div className="work container">
                <div className="work-info">
                    <h2 className="section-title">Things I've Built.</h2>
                    <p className="section-paragraph">
                        Here's a selection of my hobby creations for brushing up
                        my skills. For more, kindly check out my
                        <a
                            href={githubUrl}
                            className="no-select"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b className="link-tag">
                                <i className="fa-solid fa-link"></i>Github
                            </b>
                        </a>
                    </p>
                </div>
                <div className="work-details">
                    {projects.map((project) => {
                        return (
                            <div key={project.sNo} className="card">
                                <div className="icon">
                                    <img
                                        src={project.image}
                                        alt=""
                                        style={{
                                            width: '300px',
                                            border: '1px solid rgba(156, 153, 153, 0.589)',
                                        }}
                                    />
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
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
