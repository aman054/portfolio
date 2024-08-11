import React, {useState} from "react";
import './navbar.css';
import logo from '../../assete/logoa.png';
import contacting from '../../assete/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assete/menu.png';
 const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo "/>
            <div className="desktopMenu">
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className ="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className ="desktopMenuListItem"> About</Link>
            <Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className ="desktopMenuListItem">Projects</Link>
            <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className ="desktopMenuListItem">Skills </Link>

            </div>
            <button className="desktopMenuBtn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contacting} alt="" className="desktopMenuImg"/> Contact me</button>
                <img src={menu} alt="Menu" className='mobMenu'onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItm" onClick={()=>setShowMenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItm" onClick={()=>setShowMenu(false)} >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItm" onClick={()=>setShowMenu(false)} >Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItm" onClick={()=>setShowMenu(false)} >Skills</Link>
             <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItm" onClick={()=>setShowMenu(false)} >contact</Link>
        </div>
        </nav>
    )
        
 
 }
 export default Navbar