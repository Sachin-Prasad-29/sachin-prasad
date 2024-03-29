import React, { useEffect, useState } from 'react';
import { BiCloudDownload } from 'react-icons/bi';
import ExLogo from '../assets/images/ex-logo.gif';
import experiences from '../data/experiences';
import { resumeUrl } from '../data/urls';
import ExperienceBadges from './utilComponents/ExperienceBadges';

const ExperienceSection: React.FC<{ ExpClass: string }> = ({ ExpClass }) => {
    const [className, setclassName] = useState<string>('header container');
    useEffect(() => {
        setclassName(`experience container reveal ${ExpClass}`);
    }, [ExpClass]);
    return (
        <section id="experience">
            <div className={className}>
                <div className="col-left">
                    <div className="experience-info">
                        <h2 className="section-title">My Personal Journey.</h2>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th className="year">Year</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experiences.map((experience) => (
                                <ExperienceBadges
                                    experience={experience}
                                    key={experience.sNo}
                                />
                            ))}
                        </tbody>
                    </table>

                    <div className="btn">
                        <button className="btn-resume">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span> Resume&emsp;</span>
                                <span>
                                    <BiCloudDownload className="icon" />
                                </span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className="col-right">
                    <img
                        className="avatar"
                        src={ExLogo}
                        alt="my-cartoon-avatar"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
