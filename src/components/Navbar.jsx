import react from 'react';

function Navbar() {
    const styleLinks = {
        textDecoration: 'none',
        fontFamily: "'Schibsted Grotesk', sans-serif",
        fontWeight: 'bold',
        color: 'white'
    }

    const styleLi = {
        marginRight: '30px'
    }

    const styleCV = {
        textDecoration: 'none',
        fontFamily: "'Schibsted Grotesk', sans-serif",
        fontWeight: 'bold',
        color: "#feb313"
    }

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            position: 'sticky',
            top: '0px',
            zIndex: "10",
            boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(2px) saturate(130%)',
            WebkitBackdropFilter: 'blur(2px) saturate(100%)',
            backgroundColor: 'rgba(10, 10, 10, 0.4)',
            // backgroundImage: 'url(`./images/Navbar-bg.png`)'
        }}>
            <span id='logo' style={{
                marginLeft: '55px',
                marginTop: '15px',
                fontSize: "40px",
                paddingBottom: "15px",
                fontFamily: 'Informal Roman'
            }}>
                Sohail
            </span>
            <ul id='nav-links' style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '15px',
                marginRight: '30px',
            }}>
                <li style={styleLi}><a href="#thumbnailContainer" style={styleLinks}>Thumbnail</a></li>
                <li style={styleLi}><a href="#reelContainer" style={styleLinks}>Reels</a></li>
                <li style={styleLi}><a href="#UIContainer" style={styleLinks}>UI/UX</a></li>
                <li style={styleLi}><a href="#bookContainer" style={styleLinks}>Book Cover</a></li>
                <li style={styleLi}><a href="#contact-me" style={styleLinks}>Contact Me</a></li>
                <li style={styleLi}><a href="https://drive.usercontent.google.com/download?id=1GoDsfq1mc7z5TFD57Qt0IBesYjHXhyr0&export=download&authuser=1&confirm=t&uuid=69911398-af85-418a-aa77-48aa3ceb1bef&at=APZUnTUlolCFfNtn9MROICSNthv4:1695112537543" target='_blank' rel="noreferrer" style={styleCV}>Download CV</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;