import React from "react";
import './Navbar.css';

import {Link} from"react-router-dom"  
function Navbar() {
 
    return (
        <div>
            <nav>
                <Link to="/" className="site-title" >
                Doomanji
                </Link> 
                <ul>
                 
                    <CustomLink to="/Ridespage">Ridespage</CustomLink>
                    <CustomLink to="/Themeparks">Themeparks</CustomLink>
                    <CustomLink to="/Pricing">Pricing</CustomLink>
                    
                </ul>
            
           </nav>
            {/* <nav>
                <ul>
                <Link href="#home">Home</Link>
                <Link href="#Rides">Rides</Link>
                <Link href="/">Services</Link>
                <Link href="/about">Pricing</Link>
                <Link href="/Themepark">Themeparks</Link>
                </ul>
              
        </nav> */}
        </div>
    );
    function CustomLink({ to , children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""} >
            <a to={Link} {...props}>{children}</a>
        </li>
    );
} 
}

export default Navbar;

