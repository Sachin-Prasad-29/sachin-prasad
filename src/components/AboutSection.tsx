import React, { useEffect, useState } from 'react';
import myPic2 from '../assets/images/my-pic-2.jpeg';
import myPic from '../assets/images/my-pic.jpg';
import BOOT from '../assets/logo/boot.svg';
import CSS from '../assets/logo/css.svg';
import ES from '../assets/logo/es.svg';
import EXPRESS from '../assets/logo/express.svg';
import GIT from '../assets/logo/git.svg';
import HTML from '../assets/logo/html.svg';
import JAVA from '../assets/logo/java.svg';
import JS from '../assets/logo/js.svg';
import MONGO from '../assets/logo/mongo.svg';
import NEST from '../assets/logo/nest.svg';
import NODE from '../assets/logo/node.svg';
import PY from '../assets/logo/py.svg';
import REACT from '../assets/logo/react.svg';
import SASS from '../assets/logo/sass.svg';
import SQL from '../assets/logo/sql.svg';
import TS from '../assets/logo/ts.svg';
import VUE from '../assets/logo/vue.svg';
import technologies from '../data/technologies';
import TechBadges from './utilComponents/TechBadges';

const AboutSection = ({ AboutClass }: { AboutClass: string }) => {
    const [className, setclassName] = useState<string>('header container');
    useEffect(() => {
        setclassName(`about container reveal ${AboutClass}`);
    }, [AboutClass]);
    const getTechLogo = (prop: string) => {
        switch (prop) {
            case 'JS':
                return JS;
            case 'HTML':
                return HTML;
            case 'CSS':
                return CSS;
            case 'TS':
                return TS;
            case 'BOOT':
                return BOOT;
            case 'ES':
                return ES;
            case 'EXPRESS':
                return EXPRESS;
            case 'GIT':
                return GIT;
            case 'JAVA':
                return JAVA;
            case 'MONGO':
                return MONGO;
            case 'NEST':
                return NEST;
            case 'NODE':
                return NODE;
            case 'PY':
                return PY;
            case 'REACT':
                return REACT;
            case 'SASS':
                return SASS;
            case 'SQL':
                return SQL;
            case 'VUE':
                return VUE;
        }
    };
    return (
        <section id="about">
            <div className={className}>
                <div className="col-left">
                    <h3
                        style={{
                            fontFamily: "'Kalam', cursive",
                            opacity: 0.5,
                            color: '#108bc9',
                        }}
                    >
                        &lt;body &gt;
                    </h3>
                    <h2 className="section-title">About Me.</h2>
                    <p className="section-paragraph">
                        As a Full Stack Software Developer, I bring a versatile
                        skillset to every project, with the ability to work on
                        both the front-end and back-end of web applications.
                    </p>
                    <p className="section-paragraph">
                        I use my expertise in programming languages, frameworks,
                        and development tools to create engaging user
                        experiences. I can work independently or as part of a
                        team to meet project goals and deadlines..
                    </p>
                    <p className="section-paragraph">
                        "I am skilled in the entire software development
                        process, including planning, prototyping, testing, and
                        deployment. My priority is delivering top-notch
                        solutions that cater to the specific needs of clients
                        and end users.
                    </p>
                    <h3 style={{ color: '#CCD6F6' }}>Technologies and Tools</h3>

                    <ul>
                        {technologies.map((tech) => (
                            <TechBadges
                                tech={tech}
                                getTechLogo={getTechLogo}
                                key={tech.sNo}
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-right">
                    <div className="about-image">
                        <img src={myPic} alt="my-profile-pic" width={50} />
                    </div>
                    <div className="about-image">
                        <img src={myPic2} alt="my-profile-pic" width={50} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
