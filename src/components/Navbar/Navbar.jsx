import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar(){
    return(
        <nav>
        <span id='logo'>
        <FontAwesomeIcon icon={faUser} id='user-icon'/>
        </span>
            <ul id='nav-links'>
                <li ><a href="#home">Home</a></li>
                <li ><a href="#long-videos-container">Long Videos</a></li>
                <li ><a href="#reels-container">Reels</a></li>
                <li ><a href="#footer">Contact Me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;