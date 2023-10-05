import react, { useState } from "react";
import Card from "./subcomponents/Card";
import first from './images/ui/1.png';
import second from './images/ui/2.png';
import third from './images/ui/3.png';

function UI() {
  const cardStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    height: '80%',
    margin: '20px',
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    WebkitBackdropFilter: 'blur(4px)', // Note the capital 'W' in Webkit
    backdropFilter: 'blur(4px)',    
    borderRadius: '3px',
    // border: '1px solid rgba( 255, 255, 255, 0.18 )'
}

  return (
    <div id="UIContainer" style={{
      display: "flex", flexDirection: "column", alignItems: "center", color: "#feb313", marginTop:"40px"
    }}>
      <h1>UI/UX</h1>
      <div className="project" style={{ display: "flex", justifyContent: "space-around", width: "90%" }}>
      <a href="https://www.figma.com/file/H78dmOBvbKOUBGjQUJawMe/STREEYA-Demo?type=design&node-id=0%3A1&mode=design&t=DR3Ns3hQTl9Z8fcD-1" rel="noreferrer" target="_blank">
      <img
          src={first}  style={cardStyle} alt=""
        />
      </a>
        
        <a href="https://www.figma.com/file/H78dmOBvbKOUBGjQUJawMe/STREEYA-Demo?type=design&node-id=0%3A1&mode=design&t=DR3Ns3hQTl9Z8fcD-1" rel="noreferrer" target="_blank">
        <img
          src={second}  style={cardStyle} alt=""
        />
        </a>
        
        <a href="https://www.figma.com/file/H78dmOBvbKOUBGjQUJawMe/STREEYA-Demo?type=design&node-id=0%3A1&mode=design&t=DR3Ns3hQTl9Z8fcD-1" rel="noreferrer" target="_blank">
        <img
          src={third}  style={cardStyle} alt=""
        />
        </a>
        
      </div>
      </div>
  );
}

export default UI;
