import react from 'react';
import Linkedin from '../../icons/Linkedin';
import Twitter from '../../icons/Twitter';
import Instagram from '../../icons/Instagram';
import { BsFillTelephoneFill} from 'react-icons/bs';
import { FiMail} from 'react-icons/fi';

function Contact(){
    return(
        <>
            <h2>Contact Me</h2>
            <p><span><BsFillTelephoneFill /></span>+91 6206591116</p>
            <p><span><FiMail /></span><a href="mailto:sohailatwork10@gmail.com">sohailatwork10@gmail.com</a></p>
        <div id="image-container">
            <a href="https://www.linkedin.com/in/md-sohail-ansari-786123202/"><Linkedin /></a>
            <a href="https://twitter.com/sohail_infinity"><Twitter /></a>
            <a href="https://twitter.com/sohail_infinity"><Instagram /></a>
        </div>
        </>
    );
}

export default Contact;