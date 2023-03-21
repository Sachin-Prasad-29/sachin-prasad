import React, { useEffect, useState } from 'react';
import projects from '../data/projects';
import { githubUrl } from '../data/urls';
import LinkIcon from './utilComponents/LinkIcon';
import ProjectCard from './utilComponents/ProjectCard';
import ShowLess from './utilComponents/ShowLess';
import ShowMore from './utilComponents/ShowMore';

const ProjectSection = ({ ProjectClass }: { ProjectClass: string }) => {
    const [className, setclassName] = useState<string>('header container');
    const [count, setCount] = useState(5);
    useEffect(() => {
        setclassName(`work container reveal ${ProjectClass}`);
    }, [ProjectClass]);
    const numbers = [];
    for (let i = 0; i <= count; i++) {
        numbers.push(i);
    }
    const handleCount = (value: number) => {
        setCount(value);
    };
    return (
        <section id="work">
            <div className={className}>
                <div className="work-info">
                    <h2 className="section-title">Things I've Built.</h2>
                    <p className="section-paragraph">
                        Take a look at some of my hobby projects below, which
                        I've worked on to refine my skills. For a more
                        comprehensive list, please feel free to browse my
                        <a
                            href={githubUrl}
                            className="no-select"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <b className="link-tag">
                                <LinkIcon />
                                Github Profile
                            </b>
                        </a>
                    </p>
                </div>
                <div className="work-details">
                    {numbers.map((num) => (
                        <ProjectCard
                            project={projects[num]}
                            key={projects[num].sNo}
                        />
                    ))}
                </div>
            </div>
            {count === 5 && (
                <ShowMore handleCount={handleCount} projects={projects} />
            )}
            {count > 5 && <ShowLess handleCount={handleCount} />}
        </section>
    );
};

export default ProjectSection;
