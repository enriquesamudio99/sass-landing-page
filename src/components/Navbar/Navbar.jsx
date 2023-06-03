import './Navbar.scss';
import { useState } from 'react';

import { images } from '../../constants';

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__container container">
                <a className="navbar__brand" href="#">
                    ARSHAKIR
                </a>
                <button 
                    type="button"
                    onClick={() => setActiveMenu(true)}
                    className="navbar__open-menu"
                >
                    <img src={images.menuIcon} alt="Menu Icon" />
                </button>
                <div className={`navs__container ${activeMenu ? 'navs__container--active' : ''}`}>
                    <div className="navs">
                        <button 
                            type="button"
                            onClick={() => setActiveMenu(false)}
                            className="navs__close-menu"
                        >
                            <img src={images.closeIcon} alt="Close Icon" />
                        </button>
                        <ul className="nav">
                            <li 
                                className="nav__item"
                                onClick={() => setActiveMenu(false)}
                            >
                                <a className="nav__link" href="#features">Features</a>
                            </li>
                            <li 
                                className="nav__item"
                                onClick={() => setActiveMenu(false)}
                            >
                                <a className="nav__link" href="#testimonials">Testimonials</a>
                            </li>
                            <li 
                                className="nav__item"
                                onClick={() => setActiveMenu(false)}
                            >
                                <a className="nav__link" href="#faqs">FAQs</a>
                            </li>
                        </ul>
                        <ul className="nav nav--cta">
                            <li 
                                className="nav__item"
                                onClick={() => setActiveMenu(false)}
                            >
                                <a className="nav__link" href="#">Sign In</a>
                            </li>
                            <li 
                                className="nav__item"
                                onClick={() => setActiveMenu(false)}
                            >
                                <a className="nav__link nav__link--start btn" href="#">Start Free</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;