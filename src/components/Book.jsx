import react, { useState } from "react";
import Card from "./subcomponents/Card";
import front from './images/book/front.png';
import back from './images/book/back.png';

function Book() {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "85%",
    height: '460px',
    margin: '20px',
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    WebkitBackdropFilter: 'blur(4px)', // Note the capital 'W' in Webkit
    backdropFilter: 'blur(4px)',
    borderRadius: '5px',
    // border: '1px solid rgba( 255, 255, 255, 0.18 )'
  }

  return (
    <div id="bookContainer" style={{
      display: "flex", flexDirection: "column", alignItems: "center", color: "#feb313", marginTop: "40px"
    }}>
      <h1>Book Covers</h1>
      <div className="project" style={{ display: "flex", justifyContent: "space-around", width: "80%" }}>
        <a href="https://drive.google.com/drive/folders/16nPJywbDbz65QXvZ9H4uCFeXaCfK4iFf?usp=drive_link" rel="noreferrer" target="_blank">
        <img
          src={front} style={cardStyle} alt=""
        />
        </a>
        
        <a href="https://drive.google.com/drive/folders/16nPJywbDbz65QXvZ9H4uCFeXaCfK4iFf?usp=drive_link" rel="noreferrer" target="_blank">
        <img
          src={back} style={cardStyle} alt=""
        />
        </a>
      </div>
    </div>
  );
}

export default Book;
