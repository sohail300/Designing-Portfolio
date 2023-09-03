import react, { useState } from "react";
import Card from "./subcomponents/Card";
import front from './images/book/front.png';
import back from './images/book/back.png';

function Book() {
  const cardStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "25%",
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
      display: "flex", flexDirection: "column", alignItems: "center", color: "#feb313", marginTop:"40px"
    }}>
      <h1>Book Covers</h1>
      <div className="project" style={{ display: "flex", justifyContent: "space-around", width: "80%" }}>
        <img
          src={front}  style={cardStyle} alt=""
        />
        <img
          src={back}  style={cardStyle} alt=""
        />
      </div>
      </div>
  );
}

export default Book;
