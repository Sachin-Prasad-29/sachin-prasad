import React from 'react'
import technologies from '../data/technologies'

const AboutSection = () => {
    return (
        <section id='about'>
            <div className='about container'>
                <div className='col-left'>
                    <h3 style={{ fontFamily: "'Kalam', cursive", opacity: 0.5, color: '#108bc9' }}>&lt;body &gt;</h3>
                    <h2 className='section-title'>About Me.</h2>
                    <div className='section-paragraph'>
                        Hello! I am a Full Stack developer & designer From Chhattisgarh, India. I enjoy building things
                        that run on the Internet and Different Devices.
                        <p className='section-paragraph'>
                            I take into consideration the user experience while writing reusable and efficient code. I
                            passionately combine good design, technology, and innovation in all my projects, which I
                            like to accompany from the first idea to release.
                        </p>
                    </div>
                    <h3 style={{ color: '#CCD6F6' }}>Technologies and Tools</h3>
                    <p className='section-paragraph'>
                        Using a combination of cutting-edge technologies and reliable open-source software I build
                        user-focused, performant apps and websites for smartphones, tablets, and desktops:
                    </p>

                    <ul>
                        {technologies.map((tech) => {
                            return (
                                <li key={tech.sNo} style={{ fontSize: '20px', color: tech.color }}>
                                    <i className={tech.logo}></i>&emsp;{tech.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='col-right'>
                    <div className='about-image'>
                        <img src='img/my-pic.jpg' alt='my-profile-pic' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
