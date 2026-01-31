import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavLinks = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </nav>
        </>
    )
}

const Header = () => {
    const [toggle, setIsToggled] = useState(false);

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
                    <span className='logo'>BookQuest</span>
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
