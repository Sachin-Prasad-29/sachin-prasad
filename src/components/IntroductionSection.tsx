import React, { useEffect, useState } from 'react';
import { BiCloudDownload } from 'react-icons/bi';
import Intro from '../assets/images/Intro.gif';
import { resumeUrl } from '../data/urls';

const IntroductionSection = () => {
    const styleOne = {
        color: 'rgb(12, 221, 221)',
        fontWeight: 700,
    };
    const styleTwo = {
        marginBottom: '0px',
    };
    const styleThree = {
        fontFamily: "'Kalam', cursive",
        opacity: 0.5,
    };

    return (
        <section id="hero">
            <div className="experience container hero container fadein">
                <div className="col-left">
                    <br />
                    <br />
                    <br />
                    <h3 style={styleThree}>&lt;html &gt;</h3>
                    <h3 style={styleThree}>&lt;head &gt;</h3>
                    <br />
                    <h3>Hello, My name is</h3>
                    <h1>Sachin Kumar Prasad.</h1>
                    <span style={styleOne}>A Full Stack Developer </span>
                    <p style={styleTwo}>
                        I build Interactive Client and Server side Application
                        that run across platforms and devices.
                    </p>
                    <div className="btn">
                        <button className="btn-resume">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span> Resume&emsp;</span>
                                <span>
                                    <BiCloudDownload className="icon" />
                                </span>
                            </a>
                        </button>
                    </div>
                    <a href="#about" className="no-select">
                        <svg
                            className="mouse stagger1"
                            width="20"
                            height="40"
                            viewBox="0 0 40 77"
                        >
                            <g id="scroll" transform="translate(-253 -787)">
                                <g
                                    id="Rectangle_12"
                                    data-name="Rectangle 12"
                                    transform="translate(253 787)"
                                    fill="none"
                                    stroke="#5d9ce2"
                                    strokeWidth="4"
                                >
                                    <rect
                                        width="40"
                                        height="77"
                                        rx="20"
                                        stroke="none"
                                    />
                                    <rect
                                        x="2"
                                        y="2"
                                        width="36"
                                        height="73"
                                        rx="18"
                                        fill="none"
                                    />
                                </g>
                                <circle
                                    className="scroll"
                                    id="Ellipse_1"
                                    data-name="Ellipse 1"
                                    cx="11"
                                    cy="11"
                                    r="11"
                                    transform="translate(262 798)"
                                    fill="#5d9ce2"
                                />
                            </g>
                        </svg>
                    </a>
                    <br />
                    <h3 style={styleThree}>&lt;/head &gt;</h3>
                </div>

                <div className="col-right">
                    <img
                        src={Intro}
                        className="avatar"
                        alt="my-cartoon-avatar"
                    />
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
