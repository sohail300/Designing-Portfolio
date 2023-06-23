import react, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Reels.css";
import Card from "../subcomponents/Card/Card";

function Reels() {

  return (
    <div id="reels-container">
      <h1>Reels</h1>

      <div id="pet-project" className="project">
              <Card
                id="color-game-card"
                className="pet-project-card"
                link="https://sohail60.github.io/color-guesser-game/"
                imageLink="../../images/color-game-project.png"
                alt="color-game-project.png"
              />
              <Card
                id="ping-pong-card"
                className="pet-project-card"
                link="https://sohail60.github.io/ping-pong-score-keeper/"
                imageLink="../../images/ping-pong-project.png"
                alt="color-game-project.png"
              />
              <Card
                id="todo-list-card"
                className="pet-project-card"
                link="https://sohail60.github.io/To-Do-List/"
                imageLink="../../images/todo-list-project.png"
                alt="color-game-project.png"
              />
              </div>
    </div>
  );
}

export default Reels;
