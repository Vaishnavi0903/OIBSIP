import React, { useState } from "react";
import './navbar.css'
import '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false);
    return (

        <nav className="navbar">
            <img src="./logo.png" alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
                <img className="desktopMenuImg" src={contactImg} alt="" />Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobileMenu"  onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="MenuItem"   onClick={()=> setShowMenu(false)}  >Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} className="MenuItem"   onClick={()=> setShowMenu(false)}  >About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="MenuItem"   onClick={()=> setShowMenu(false)}  >Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="MenuItem" onClick={()=> setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="MenuItem" onClick={()=> setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    );
}

export default Navbar