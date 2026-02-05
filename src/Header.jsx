import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, redirect } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <nav>
                <ul className='navigation-links'>
                    <li><Link to={'/about'}>About Me</Link></li>
                    <li><Link to={'/contact'}>Contact Me</Link></li>
                </ul>
            </nav>
        </>
    )
}

const Header = () => {
    const [toggle, setIsToggled] = useState(true);

    const toggleNavbar = () => {
        console.log("toggling navbar")
        setIsToggled(!toggle);
        console.log(toggle);
    }

    return (
        <div>
            {/* Header/Navigation */}
            <header className='header-nav'>
                <div className='hamburger-menu'>
                    <span className='logo' ><Link to={"/"}>BookQuest</Link></span>
                    {
                        toggle ? <GiHamburgerMenu onClick={toggleNavbar} className='menu-icons' /> : <RxCross2 className='menu-icons' onClick={toggleNavbar} />
                    }
                </div>
                <div className={`dropdown-menu ${!toggle ? 'dropdown-menu--open' : ''}`}>
                    <NavLinks />
                </div>
            </header>
        </div>
    )
}

export default Header
