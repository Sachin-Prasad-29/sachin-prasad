import { useEffect, useState } from 'react';
import LogoImg from '../assets/images/logo.svg';

const NavBar: React.FC<{ NavClass: string }> = ({ NavClass }) => {
    const [className, setclassName] = useState<string>('header container');
    const [hamBurgerClass, setHamBurgerClass] = useState<string>('no-select');
    const [mobileMenuClass, setMobileMenuClass] =
        useState<string>('mobile-menu');

    const hamburgerActivated = () => {
        if (hamBurgerClass === 'no-select') {
            setHamBurgerClass('no-select active');
            setMobileMenuClass('mobile-menu active');
        } else {
            setHamBurgerClass('no-select');
            setMobileMenuClass('mobile-menu');
        }
    };
    useEffect(() => {
        setclassName(`header container ${NavClass}`);
    }, [NavClass]);
    return (
        <header id="header">
            <div className={className}>
                <nav className="nav-bar">
                    <div className="logo">
                        <a href="index.html" className="no-select logo">
                            <img src={LogoImg} alt="sachin's logo" />
                        </a>
                    </div>
                    <div className="nav-list">
                        <label
                            id="hamburger"
                            className={hamBurgerClass}
                            onClick={(e) => {
                                hamburgerActivated();
                            }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className={mobileMenuClass}>
                            <li>
                                <a
                                    href="#about"
                                    data-after="About"
                                    className="no-select"
                                    onClick={(e) => {
                                        hamburgerActivated();
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experience"
                                    data-after="Experience"
                                    className="no-select"
                                    onClick={(e) => {
                                        hamburgerActivated();
                                    }}
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    data-after="work"
                                    className="no-select"
                                    onClick={(e) => {
                                        hamburgerActivated();
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    data-after="contact"
                                    className="no-select"
                                >
                                    Contact
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="#contact"
                                    data-after="Gallery"
                                    className="no-select"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    data-after="Admin Login"
                                    className="no-select"
                                >
                                    Admin Login
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
