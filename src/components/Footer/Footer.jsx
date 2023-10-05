import react from 'react';
import './Footer.css'
// import Linkedin from '../icons/Linkedin';
import Linkedin from '../icons/linkedin.png';
import Twitter from '../icons/twitter.png';
import Instagram from '../icons/insta.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

function Footer() {
    return (
        <div id="contact-me" style={{
            display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "40px", border:"2px solid red"
          }}>
            <h1>Contact Me</h1>
            <div className="contact-top" style={{width:"80%", marginLeft:"0%"}}>
            <div className="contact-me-div">
                <p><span><BsFillTelephoneFill /></span>+91 6206591116</p>
                <p><span><FiMail /></span><a href="mailto:sohailatwork10@gmail.com">sohailatwork10@gmail.com</a></p>
            </div>
            <div id="image-container">
                <a href="https://www.linkedin.com/in/md-sohail-ansari-786123202/"><img style={{ height: "35%", width: "70%", marginRight: "8px" }} src={Linkedin} alt="" /></a>
                <a href="https://twitter.com/sohail_infinity"><img style={{ height: "35%", width: "90%" }} src={Twitter} alt="" /></a>
                <a href="https://twitter.com/sohail_infinity"><img style={{ height: "40%", width: "90%" }} src={Instagram} alt="" /></a>
            </div>
            </div>
        </div>
    );
}

export default Footer;