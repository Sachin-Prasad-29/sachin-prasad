import React from 'react';
import experiences from '../data/experiences';
import { resumeUrl } from '../data/urls';

const ExperienceSection = () => {
    return (
        <section id="experience">
            <div className="experience container ">
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
                            {experiences.map((experience) => {
                                return (
                                    <tr key={experience.sNo}>
                                        <td className="year">
                                            {experience.year}
                                        </td>
                                        <td>
                                            <span className="title">
                                                <i className="fa-solid fa-briefcase"></i>
                                                &emsp;{experience.desination}
                                            </span>
                                            <strong>
                                                <br />
                                                <a
                                                    href={experience.url}
                                                    target="_blank"
                                                    className="no-select"
                                                    rel="noopener noreferrer"
                                                >
                                                    @{experience.org}
                                                </a>
                                            </strong>
                                            <div className="time">
                                                {experience.period}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div className="btn">
                        <button className="btn-resume">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume&emsp;
                                <i className="fa-solid fa-circle-down"></i>
                            </a>
                        </button>
                    </div>
                </div>

                <div className="col-right">
                    <img
                        className="avatar"
                        src="img/investment-data-animate.svg"
                        alt="my-cartoon-avatar"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
