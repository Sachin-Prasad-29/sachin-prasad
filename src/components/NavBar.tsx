import React from 'react'
import LogoImg from '../assets/images/logo.svg'

const NavBar = () => {
    return (
        <header id='header'>
            <div className='header container'>
                <nav className='nav-bar'>
                    <div className='logo'>
                        <a href='index.html' className='no-select logo'>
                            <img src={LogoImg} alt="sachin's logo" />
                        </a>
                    </div>
                    <div className='nav-list'>
                        <label id='hamburger' className='no-select'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className='mobile-menu'>
                            <li>
                                <a href='#about' data-after='About' className='no-select'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href='#experience' data-after='Experience' className='no-select'>
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href='#work' data-after='work' className='no-select'>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href='#contact' data-after='contact' className='no-select'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
