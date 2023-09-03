import react, { useState } from "react";
import Card from "./subcomponents/Card";
import test1 from './images/testimonial/1.png'
import test2 from './images/testimonial/2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  const testimonialStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    // border: "2px solid red",
    height: "220px",
    width: "500px",
    padding: "25px",
    margin: "40px",
    borderRadius: "10px",
    background: "#fff"
  }

  const paraStyle = {
    margin: "5px",
    fontSize: "16px"
  }

  return (
    <div id="testimonialContainer" style={{
      display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "40px"
    }}>

      <h1 style={{ color: "#feb313" }}>Testimonial</h1>
      <div style={{ display: "flex" }}>
        <div style={testimonialStyle}>
          <img src={test1} alt="" style={{ borderRadius: "50%", height: "160px", width: "160px" }} />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
            <b><p style={paraStyle}>Bharti Nandan</p></b>
            <b><p style={paraStyle}>Co-Owner, Streeya</p></b>
            <p style={paraStyle}>
              <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} />
            </p>
            <p style={paraStyle}>"Working with Sohail was an absolute pleasure. He possesses a keen eye for detail and a deep understanding of user experience design. His ability to translate our ideas into visually stunning and user-friendly interfaces was truly impressive."</p>
          </div>
        </div>
        <div style={testimonialStyle}>
          <img src={test2} alt="" style={{ borderRadius: "50%", height: "160px", width: "160px" }} />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
            <b><p style={paraStyle}>Prashant Yadav</p></b>
            <b><p style={paraStyle}>Owner, Learners Bucket YT Channel</p></b>
            <p style={paraStyle}>
              <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} />
            </p>
            <p style={paraStyle}>"Sohail is a true professional who values clear communication. He was receptive to my feedback and made revisions promptly. His commitment to ensuring my satisfaction with the final product was truly commendable."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
