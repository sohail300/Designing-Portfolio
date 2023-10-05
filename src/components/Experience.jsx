import react, { useState } from "react";
import Card from "./subcomponents/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Experience() {

  return (
    <div id="thumbnailContainer" style={{
      display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginTop: "40px"
    }}>

      <h1 style={{ color: "#feb313" }}>Experience</h1>
      <div style={{ display: "flex", flexDirection: "column",width:"80%", marginLeft:"0%"}}>
        <p>
          <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} />
          Worked as a UI/UX freelancer for a women apperal startup STREEYA (will be launching in August-September).
        </p>

        <p>
          <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} />
          Made Thumbnails and edited videos of Youtubers.
        </p>

        <p>
          <FontAwesomeIcon icon={faStar} style={{ color: "#feb313", marginRight: "10px" }} />
          Made poster for college events. <a href="https://drive.google.com/drive/folders/1vpg4lXj9xnK6TkoflMCYRkLG5lxj05op?usp=drive_link" rel="noreferrer" target="_blank" style={{ color: "yellow" }}>Link</a>
        </p>
      </div>
    </div>
  );
}

export default Experience;
