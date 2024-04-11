import React, { useState } from 'react';
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn';
import SignUpBtn from '../SignUpBtn/SignUpBtn';
import Logo from '../Logo/Logo';

import './navbar.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

     const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
             <div className="overlay"></div>

             <div className={`sidebar ${isOpen ? 'sidebar-displayed' : 'sidebar'}`}>
             <Logo />
               <div className="sidebar-buttons-container">
                <SignUpBtn />
                <LearnMoreBtn />
               </div>
               <div className='nav-links-container-sidebar'>
                        <a href="#">Digital Solutions</a>
                        <a href="#">Automation Services</a>
                        <a href="#">Business Controlling</a>
                        <a href="#">More Services <i className="fa-solid fa-chevron-down"></i></a>
                    </div>
            </div>

             <div className="navbar ">
                <div className="navbar-left-side">
                <Logo />
                     <div className='nav-links-container'>
                        <a href="#">Digital Solutions</a>
                        <a href="#">Automation Services</a>
                        <a href="#">Business Controlling</a>
                        <a href="#">More Services <i className="fa-solid fa-chevron-down"></i></a>
                    </div>
                </div>

                <div className="navbar-right-side">
                     <SignUpBtn />
                    <LearnMoreBtn />
                </div>
                 <i className="fa-solid fa-bars toggler" onClick={toggleSidebar}></i>
            </div>
        </>
    );
};

export default Navbar;
