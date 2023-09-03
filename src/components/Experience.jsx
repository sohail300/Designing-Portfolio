import react, { useState } from "react";
import Card from "./subcomponents/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Experience() {

  return (
    <div id="thumbnailContainer" style={{
      display: "flex", flexDirection: "column", alignItems: "center", width:"100%", marginTop:"40px"
    }}>

      <h1 style={{ color: "#feb313" }}>Experience</h1>
<div style={{display:"flex", flexDirection:"column"}}>

      <p>
        <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight:"10px"}} />
        Worked as a UI/UX freelancer for a women apperal startup STREEYA (will be launching in August-September).
      </p>

      <p>
        <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight:"10px" }} />
        Made Thumbnails and edited videos of Youtubers
      </p>
</div>
    </div>
  );
}

export default Experience;
