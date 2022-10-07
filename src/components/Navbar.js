import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '@mui/material';



function Navbar() {
 
    return (
        <div>
            <nav>
                <div>
                  <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                 <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                </ul>

        
               </div>
        </nav>
            
        </div>
    );
}
export default Navbar;