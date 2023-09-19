import react, { useState } from "react";
import first from './images/reel/1.png';
import second from './images/reel/2.png';

function Reels() {
  const cardStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    height: '440px',
    margin: '20px',
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    WebkitBackdropFilter: 'blur(4px)', // Note the capital 'W' in Webkit
    backdropFilter: 'blur(4px)',    
    borderRadius: '8px',
    // border: '1px solid rgba( 255, 255, 255, 0.18 )'
}

  return (
    <div id="reelContainer" style={{
      display: "flex", flexDirection: "column", alignItems: "center", color: "#feb313", marginTop:"40px"
    }}>
      <h1>Reels</h1>
      <div className="project" style={{ display: "flex", justifyContent: "space-around", width: "80%" }}>
      <a href="https://youtube.com/shorts/AMQP8dKGftU?feature=share" rel="noreferrer" target="_blank">
      <img
          src={first} style={cardStyle} alt=""
        />
      </a>
      <a href="https://youtube.com/shorts/bQR5-BJQbcU?feature=share" rel="noreferrer" target="_blank">
      <img
          src={second} style={cardStyle} alt=""
        />
      </a>
      </div>
      </div>
  );
}

export default Reels;
