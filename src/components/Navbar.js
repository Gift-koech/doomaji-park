import React from "react";
import { Link} from "react-router-dom"
 import './Navbar.css'
 
function Navbar() {
    return (
        <div class="topnav">
  <Link class="active" href="#home">Home</Link>

  <Link href="#Activities">Activities</Link>
  <Link href="#Pricing">Pricing</Link>
</div>
    );
}
function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname


    return (
        <li className={path === to ? "active" : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
   );
}
export default Navbar;