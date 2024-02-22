import react from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { CiInstagram } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';

function Footer() {
    return (
        <div id="contact-me" style={{
            display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "40px"
        }}>
            <h1>Contact Me</h1>
            <div className="contact-top" style={{ width: "80%", marginLeft: "0%" }}>
                <div className="contact-me-div">
                    <p><span><BsFillTelephoneFill /></span>+91 6206591116</p>
                    <p><span><FiMail /></span><a href="mailto:sohailatwork10@gmail.com">sohailatwork10@gmail.com</a></p>
                </div>
                <div id="image-container" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                    <a style={{ display: "table-cell", color: "#fff" , fontSize:"56px"}} href="https://www.linkedin.com/in/md-sohail-ansari-b51201278/" target="_blank" rel="noreferrer" alt="">
                        <CiLinkedin />
                    </a>

                    <a style={{ display: "table-cell", color: "#fff" , fontSize:"56px"}} href="https://twitter.com/sohail_twts" target="_blank" rel="noreferrer" alt="">
                        <CiTwitter />
                    </a>

                    <a style={{ display: "table-cell", color: "#fff" , fontSize:"56px"}} href="https://www.instagram.com/sohail_infinity/" target="_blank" rel="noreferrer" alt="">
                        <CiInstagram />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Footer;