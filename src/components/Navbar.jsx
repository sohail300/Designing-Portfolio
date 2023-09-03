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
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center'
        }}>
            <span id='logo' style={{
                marginLeft: '55px',
                marginTop: '40px',
                fontSize: "44px",
                fontFamily: 'Informal Roman'
            }}>
                Sohail
            </span>
            <ul id='nav-links' style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '40px',
                marginRight: '30px',
            }}>
                <li style={styleLi}><a href="#thumbnailContainer" style={styleLinks}>Thumbnail</a></li>
                <li style={styleLi}><a href="#UIContainer" style={styleLinks}>UI/UX</a></li>
                <li style={styleLi}><a href="#bookContainer" style={styleLinks}>Book Cover</a></li>
                <li style={styleLi}><a href="#contact-me" style={styleLinks}>Contact Me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;